import { Student } from 'src/core/student/entities/student.entity';
import { Subject } from 'src/core/subject/entities/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.grades)
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject)
  subject: Subject;

  @Column({ type: 'float' })
  score: number;

  @Column({ type: 'int' })
  type: number;
}
