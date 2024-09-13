import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GradeController } from './grade.controller';
import { GradeService } from './grade.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GradeController],
  providers: [GradeService],
})
export class GradeModule {}
