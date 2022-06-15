import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicantController } from './applicant.controller';
import { ApplicantService } from './applicant.service';
import { Applicant } from './models/applicant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Applicant])
  ],
  controllers: [ApplicantController],
  providers: [ApplicantService]
})
export class ApplicantModule {}
