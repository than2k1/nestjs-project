import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller.js';
import { ReportsService } from './reports.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.emtity.js';
@Module({
  controllers: [ReportsController],
  providers: [ReportsService],
  imports: [
    TypeOrmModule.forFeature([Report])
  ]
})
export class ReportsModule { }
