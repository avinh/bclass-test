import { Grade } from 'src/core/grade/entities/grade.entity';
import { School } from 'src/core/school/entities/school.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  dateOfBirth: Date;

  @Column({ length: 10 })
  class: string;

  @ManyToOne(() => School, (school) => school.students)
  school: School;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];
}
