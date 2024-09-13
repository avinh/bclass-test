import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grade } from '../grade/entities/grade.entity';
import { Student } from '../student/entities/student.entity';
import { DBRepos } from './database.type';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Grade)
    private readonly grandeRepo: Repository<Grade>,
    @InjectRepository(Grade)
    private readonly studentRepo: Repository<Student>,
  ) {}

  getRepos(altRepos?: DBRepos): DBRepos {
    return {
      grandeRepo: altRepos?.grandeRepo || this.grandeRepo,
      studentRepo: altRepos?.studentRepo || this.studentRepo,
    };
  }
}
