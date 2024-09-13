import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassModule } from './core/class/class.module';
import { DatabaseModule } from './core/database/database.module';
import { GradeModule } from './core/grade/grade.module';
import { PrincipalModule } from './core/principal/principal.module';
import { SchoolModule } from './core/school/school.module';
import { StudentModule } from './core/student/student.module';
import { SubjectModule } from './core/subject/subject.module';
import { TeacherModule } from './core/teacher/teacher.module';
import { SeedModule } from './seed/seed.module';
import { SeedService } from './seed/seed.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ClassModule,
    GradeModule,
    SubjectModule,
    StudentModule,
    TeacherModule,
    PrincipalModule,
    SchoolModule,
    SeedModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly seedService: SeedService) {}

  async onModuleInit() {
    await this.seedService.seed();
  }
}
