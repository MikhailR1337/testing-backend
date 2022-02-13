import { Body, Controller, HttpCode, Post } from '@nestjs/common';

import { CandidatesService } from './candidates.service';
import { AuthCandidateDto } from './dto/auth-candidate';

@Controller('candidate')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {}

    @Post('/login')
    @HttpCode(200)
    findOne(@Body() authCandidateDto: AuthCandidateDto): AuthCandidateDto {
        return this.candidatesService.findOne(authCandidateDto);
    }
}
