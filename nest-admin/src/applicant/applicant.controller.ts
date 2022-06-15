import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantDto } from './models/applicant.dto';

@Controller('applicant')
export class ApplicantController {
    constructor(
        private applicantService: ApplicantService
    ){}
    @Get()
    async all(@Query('page') page = 1) {
        return this.applicantService.paginate(page);
    }

    @Post()
    async create(@Body() body: ApplicantDto) {
        return this.applicantService.create(body);
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.applicantService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() body: ApplicantDto
    ) {
        await this.applicantService.update(id, body);

        return this.applicantService.findOne({id});
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.applicantService.delete(id);
    }
}
