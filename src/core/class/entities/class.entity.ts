import { School } from 'src/core/school/entities/school.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @Column()
  year: number;

  @ManyToOne(() => School, (school) => school.classes)
  school: School;
}
