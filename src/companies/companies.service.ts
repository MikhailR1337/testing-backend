import { Injectable } from '@nestjs/common';

import { AuthCompanyDto } from './dto/auth-company';
import { CreateCompanyDto } from './dto/create-company';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
    async findOne(login) {
        const company = Company.findOne({ login });
        if (!company) {
            throw new Error('company not found');
        }

        return company;
    }

    async create(createCompanyDto: CreateCompanyDto) {
        const { name, login, password } = createCompanyDto;

        const company = new Company(name, login, password);
        await company.save();
    }

    async auth(authCompanyDto: AuthCompanyDto) {
        const { login, password } = authCompanyDto;

        const company = await Company.findOne({ login });
        if (!company) {
            throw new Error('company not found');
        }

        if (company.password === password) {
            return { ...company, role: 'authCompany' };
        }

        throw new Error('wrong password');
    }
}
