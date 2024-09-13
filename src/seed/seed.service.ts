import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from 'src/core/class/entities/class.entity';
import { Grade } from 'src/core/grade/entities/grade.entity';
import { Principal } from 'src/core/principal/entities/principal.entity';
import { School } from 'src/core/school/entities/school.entity';
import { Student } from 'src/core/student/entities/student.entity';
import { Subject } from 'src/core/subject/entities/subject.entity';
import { Teacher } from 'src/core/teacher/entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(School) private schoolRepository: Repository<School>,
    @InjectRepository(Principal)
    private principalRepository: Repository<Principal>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Class) private classRepository: Repository<Class>,
    @InjectRepository(Subject) private subjectRepository: Repository<Subject>,
    @InjectRepository(Grade) private gradeRepository: Repository<Grade>,
  ) {}

  async seed() {
    const school1 = this.schoolRepository.create({
      name: 'Trường A',
      type: 'Primary',
      address: '123 Main St',
    });

    const school2 = this.schoolRepository.create({
      name: 'Trường B',
      type: 'Secondary',
      address: '456 Oak St',
    });

    const school3 = this.schoolRepository.create({
      name: 'Trường C',
      type: 'HighSchool',
      address: '789 Pine St',
    });

    await this.schoolRepository.save([school1, school2, school3]);

    const principal1 = this.principalRepository.create({
      name: 'Nguyễn Văn A',
      school: school1,
    });

    await this.principalRepository.save(principal1);

    const teacher1 = this.teacherRepository.create({
      name: 'Lung Thị Linh',
      subject: 'Toán',
      school: school1,
    });

    const teacher2 = this.teacherRepository.create({
      name: 'Đào Văn Sâm',
      subject: 'Tiếng Anh',
      school: school2,
    });

    await this.teacherRepository.save([teacher1, teacher2]);

    const student1 = this.studentRepository.create({
      name: 'Nâu Thắm',
      dateOfBirth: new Date('2010-05-15'),
      class: '1A',
      school: school1,
    });

    const student2 = this.studentRepository.create({
      name: 'Trần Dần',
      dateOfBirth: new Date('2008-08-20'),
      class: '2B',
      school: school2,
    });

    await this.studentRepository.save([student1, student2]);

    const class1 = this.classRepository.create({
      name: '1A',
      year: 2024,
      school: school1,
    });

    const class2 = this.classRepository.create({
      name: '2B',
      year: 2024,
      school: school2,
    });

    await this.classRepository.save([class1, class2]);

    const subject1 = this.subjectRepository.create({ name: 'Toán' });
    const subject2 = this.subjectRepository.create({ name: 'Tiếng Anh' });

    await this.subjectRepository.save([subject1, subject2]);

    const grades: Grade[] = [
      this.gradeRepository.create({
        student: student1,
        subject: subject1,
        score: 8.0,
        type: 1,
      }),
      this.gradeRepository.create({
        student: student1,
        subject: subject1,
        score: 7.5,
        type: 2,
      }),
      this.gradeRepository.create({
        student: student1,
        subject: subject1,
        score: 9.0,
        type: 3,
      }),
      this.gradeRepository.create({
        student: student2,
        subject: subject2,
        score: 6.5,
        type: 1,
      }),
      this.gradeRepository.create({
        student: student2,
        subject: subject2,
        score: 7.0,
        type: 2,
      }),
      this.gradeRepository.create({
        student: student2,
        subject: subject2,
        score: 8.0,
        type: 3,
      }),
    ];

    await this.gradeRepository.save(grades);

    console.log('Seeding completed.');
  }
}
