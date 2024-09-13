import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGradeDto } from './create-grade.dto';

export class UpdateGradeDto extends PartialType(CreateGradeDto) {
  @ApiProperty({
    description: 'The score of the student',
    type: Number,
  })
  readonly score: number;

  @ApiProperty({
    type: 'The type of the student',
    enum: [1, 2, 3],
  })
  readonly type: number;
}
