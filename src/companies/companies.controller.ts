import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company';
import { AuthCompanyDto } from './dto/auth-company';

@Controller('company')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get(':login')
    public async findOne(@Param() login: string) {
        return this.companiesService.findOne(login);
    }

    @Post('/registration')
    @HttpCode(201)
    public async create(@Body() createCompanyDto: CreateCompanyDto) {
        await this.companiesService.create(createCompanyDto);
    }

    @Post('/login')
    @HttpCode(200)
    public async auth(@Body() authCompanyDto: AuthCompanyDto) {
        return this.companiesService.auth(authCompanyDto);
    }
}
