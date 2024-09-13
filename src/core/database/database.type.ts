import { Repository } from 'typeorm';
import { Grade } from '../grade/entities/grade.entity';
import { Student } from '../student/entities/student.entity';
export type DBRepos = {
  grandeRepo?: Repository<Grade>;
  studentRepo?: Repository<Student>;
};
