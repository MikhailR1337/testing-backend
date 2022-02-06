import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company';
import { AuthCompanyDto } from './dto/auth-company';

@Controller('company')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get()
    getHello(): string {
        return this.companiesService.getHello();
    }

    @Post('/registration')
    @HttpCode(201)
    create(@Body() createCompanyDto: CreateCompanyDto): string {
        console.log('createCompanyDto', createCompanyDto);
        return 'success';
    }

    @Post('/login')
    @HttpCode(200)
    auth(@Body() authCompanyDto: AuthCompanyDto): string {
        console.log('createCompanyDto', authCompanyDto);
        return 'success';
    }
}
