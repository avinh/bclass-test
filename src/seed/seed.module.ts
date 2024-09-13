import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from 'src/core/class/entities/class.entity';
import { Grade } from 'src/core/grade/entities/grade.entity';
import { Principal } from 'src/core/principal/entities/principal.entity';
import { School } from 'src/core/school/entities/school.entity';
import { Student } from 'src/core/student/entities/student.entity';
import { Subject } from 'src/core/subject/entities/subject.entity';
import { Teacher } from 'src/core/teacher/entities/teacher.entity';
import { SeedService } from './seed.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      School,
      Principal,
      Teacher,
      Student,
      Class,
      Subject,
      Grade,
    ]),
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
