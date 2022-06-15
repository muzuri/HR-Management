import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { application } from 'express';
import { AbstractService } from 'src/common/abstract.service';
import { Repository } from 'typeorm';
import { Application } from './models/application.entity';

@Injectable()
export class ApplicationService extends AbstractService {
    constructor(
        @InjectRepository(Application) private readonly repositoryApplication: Repository<Application>
    ){
        super(repositoryApplication);
    }

}
