import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesController } from './companies/companies.controller';
import { CompaniesService } from './companies/companies.service';

describe('AppController', () => {
    let appController: CompaniesController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CompaniesController],
            providers: [CompaniesService],
        }).compile();

        appController = app.get<CompaniesController>(CompaniesController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
