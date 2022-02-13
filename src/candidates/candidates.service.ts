import { Injectable } from '@nestjs/common';

import { AuthCandidateDto } from './dto/auth-candidate';

@Injectable()
export class CandidatesService {
    findOne(authCandidateDto): AuthCandidateDto {
        return authCandidateDto;
    }
}
