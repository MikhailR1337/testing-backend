import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company';

@Controller('company')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  getHello(): string {
    return this.companiesService.getHello();
  }

  @Post()
  @HttpCode(201)
  create(@Body() createCompanyDto: CreateCompanyDto): string {
    console.log('createCompanyDto', createCompanyDto);
    return 'success';
  }
}
