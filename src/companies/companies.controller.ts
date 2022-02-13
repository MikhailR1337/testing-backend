import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company';
import { AuthCompanyDto } from './dto/auth-company';

@Controller('company')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get(':companyId')
    findOne(@Param() companyId): string {
        return this.companiesService.findOne(companyId);
    }

    @Post('/registration')
    @HttpCode(201)
    create(@Body() createCompanyDto: CreateCompanyDto): CreateCompanyDto {
        return createCompanyDto;
    }

    @Post('/login')
    @HttpCode(200)
    auth(@Body() authCompanyDto: AuthCompanyDto): AuthCompanyDto {
        return authCompanyDto;
    }
}
