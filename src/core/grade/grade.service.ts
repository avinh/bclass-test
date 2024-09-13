import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UpdateGradeDto } from './dto/update-grade.dto';

@Injectable()
export class GradeService {
  constructor(private readonly databaseService: DatabaseService) {}
  async getStudentGrades(studentId: number) {
    const student = await this.databaseService.getRepos().studentRepo.findOne({
      where: { id: studentId },
    });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    const grades = await this.databaseService.getRepos().grandeRepo.find({
      where: { student: { id: studentId } },
      relations: ['subject'],
    });
    const subjectsMap = new Map<
      string,
      { scores: { score: number; type: number }[]; subjectName: string }
    >();

    grades.forEach((grade) => {
      const subjectName = grade.subject.name;
      if (!subjectsMap.has(subjectName)) {
        subjectsMap.set(subjectName, { scores: [], subjectName });
      }
      subjectsMap
        .get(subjectName)
        .scores.push({ score: grade.score, type: grade.type });
    });

    let totalPointsForAllSubjects = 0;
    let totalTypesForAllSubjects = 0;

    const gradesBySubject = Array.from(subjectsMap.values()).map(
      ({ scores, subjectName }) => {
        const totalPoints = scores.reduce(
          (total, score) => total + score.score * score.type,
          0,
        );

        const totalTypes = scores.reduce(
          (total, score) => total + score.type,
          0,
        );

        const averageScore = totalTypes > 0 ? totalPoints / totalTypes : 0;

        // Cộng dồn cho tất cả môn học
        totalPointsForAllSubjects += totalPoints;
        totalTypesForAllSubjects += totalTypes;

        return {
          subject: subjectName,
          averageScore: averageScore,
          scores: scores.map((score, index) => ({
            score: score.score,
            type: score.type,
          })),
        };
      },
    );

    const averageScoreAllSubjects =
      totalTypesForAllSubjects > 0
        ? totalPointsForAllSubjects / totalTypesForAllSubjects
        : 0;

    return {
      studentId: student.id,
      name: student.name,
      grades: gradesBySubject.sort((a, b) =>
        a.subject.localeCompare(b.subject),
      ),
      averageScoreAllSubjects,
    };
  }

  async updateStudentGrades(gradeId: number, dto: UpdateGradeDto) {
    const grade = await this.databaseService
      .getRepos()
      .grandeRepo.findOne({ where: { id: gradeId } });

    if (!grade) {
      throw new NotFoundException('Grade not found');
    }

    await this.databaseService
      .getRepos()
      .grandeRepo.update(gradeId, { ...dto });

    const updatedGrade = await this.databaseService
      .getRepos()
      .grandeRepo.findOne({ where: { id: gradeId } });

    return updatedGrade;
  }
}
