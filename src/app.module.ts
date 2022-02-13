import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompaniesModule } from './companies/companies.module';
import { CandidatessModule } from './candidates/candidates.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'test',
            password: 'test',
            database: 'test',
            entities: ["dist/**/*.entity{.ts,.js}"],
            logging: true,
            synchronize: true,
        }),
        CompaniesModule,
        CandidatessModule
    ],
})
export class AppModule {}
