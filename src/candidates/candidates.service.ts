import { Injectable } from '@nestjs/common';
import { AuthCandidateDto } from './dto/auth-candidate';
import { CreateCandidateDto } from './dto/create-candidate';

import { Candidate } from './entities/candidate.entity';

@Injectable()
export class CandidatesService {
    async auth(authCandidateDto: AuthCandidateDto) {
        const { personalKey } = authCandidateDto;

        const candidate = await Candidate.findOne({ personalKey });
        if (!candidate) {
            throw new Error('candidate not found');
        }

        return { ...candidate, role: 'authCandidate' };
    }

    async create(createCandidateDto: CreateCandidateDto) {
        const { personalKey, name, testLink } = createCandidateDto;

        const candidate = new Candidate(personalKey, name, testLink);
        await candidate.save();
    }
}
