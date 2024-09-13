import { Class } from 'src/core/class/entities/class.entity';
import { Principal } from 'src/core/principal/entities/principal.entity';
import { Student } from 'src/core/student/entities/student.entity';
import { Teacher } from 'src/core/teacher/entities/teacher.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'enum', enum: ['Primary', 'Secondary', 'HighSchool'] })
  type: 'Primary' | 'Secondary' | 'HighSchool';

  @Column({ length: 255 })
  address: string;

  @OneToMany(() => Principal, (principal) => principal.school)
  principals: Principal[];

  @OneToMany(() => Teacher, (teacher) => teacher.school)
  teachers: Teacher[];

  @OneToMany(() => Student, (student) => student.school)
  students: Student[];

  @OneToMany(() => Class, (cls) => cls.school)
  classes: Class[];
}
