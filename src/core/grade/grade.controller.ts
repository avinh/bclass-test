import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { GradeService } from './grade.service';

@Controller('grade')
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}
  @ApiOperation({ summary: 'Get grades of student' })
  @Get(':id')
  getStudentGrades(@Param('id') id: string) {
    return this.gradeService.getStudentGrades(+id);
  }

  @ApiOperation({ summary: 'Update score for student' })
  @Post(':id')
  updateStudentGrades(
    @Param('id') id: string,
    @Body() updateGradeDto: UpdateGradeDto,
  ) {
    return this.gradeService.updateStudentGrades(+id, updateGradeDto);
  }
}
