import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { GradeService } from './grade.service';

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}
  @ApiOperation({ summary: 'Get grades of student' })
  @Get(':student_id')
  getStudentGrades(@Param('student_id') student_id: string) {
    return this.gradeService.getStudentGrades(+student_id);
  }

  @ApiOperation({ summary: 'Update score for student' })
  @Post(':grade_id')
  updateStudentGrades(
    @Param('grade_id') grade_id: string,
    @Body() updateGradeDto: UpdateGradeDto,
  ) {
    return this.gradeService.updateStudentGrades(+grade_id, updateGradeDto);
  }
}
