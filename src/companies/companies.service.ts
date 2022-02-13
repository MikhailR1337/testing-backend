import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
    findOne(companyId): string {
        return `Hello Companies! with${companyId}`;
    }
}
