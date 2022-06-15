import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { Application } from './models/application.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Application]),
    CommonModule
    ],
  controllers: [ApplicationController],
  providers: [ApplicationService],
  exports: [ApplicationService]
})
export class ApplicationModule {}
