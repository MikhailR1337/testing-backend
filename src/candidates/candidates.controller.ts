import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CandidatesService } from './candidates.service';
import { AuthCandidateDto } from './dto/auth-candidate';
import { CreateCandidateDto } from './dto/create-candidate';

@Controller('candidate')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {}

    @Post('/login')
    @HttpCode(200)
    public async auth(@Body() authCandidateDto: AuthCandidateDto) {
        return this.candidatesService.auth(authCandidateDto);
    }

    @Post('/create')
    @HttpCode(201)
    public async create(@Body() createCandidateDto: CreateCandidateDto) {
        await this.candidatesService.create(createCandidateDto);
    }
}
