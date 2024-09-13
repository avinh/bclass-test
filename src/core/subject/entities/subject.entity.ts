import { Grade } from 'src/core/grade/entities/grade.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Grade, (grade) => grade.subject)
  grades: Grade[];
}
