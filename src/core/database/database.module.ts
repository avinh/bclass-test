import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../../../db/data-source';
import { Grade } from '../grade/entities/grade.entity';
import { Student } from '../student/entities/student.entity';
import { DatabaseService } from './database.service';
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Grade, Student]),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
