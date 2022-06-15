import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Applicant } from './models/applicant.entity';

@Injectable()
export class ApplicantService extends AbstractService {
    constructor(
        @InjectRepository(Applicant) private readonly repositoryApplicant: Repository<Applicant>
    ){
        super(repositoryApplicant);
    }
}
