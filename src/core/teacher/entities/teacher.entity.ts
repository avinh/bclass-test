import { School } from 'src/core/school/entities/school.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 50 })
  subject: string;

  @ManyToOne(() => School, (school) => school.teachers)
  school: School;
}
