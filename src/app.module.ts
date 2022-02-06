import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { CandidatessModule } from './candidates/candidates.module';

@Module({
    imports: [CompaniesModule, CandidatessModule],
})
export class AppModule {}
