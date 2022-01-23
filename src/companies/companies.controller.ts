import { Controller, Get } from '@nestjs/common';
import { CompaniesService } from './companies.service';

@Controller()
export class CompaniesController {
  constructor(private readonly appService: CompaniesService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
