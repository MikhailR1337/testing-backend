import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { AuthCandidateDto } from './dto/auth-candidate';

@Controller('candidate')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {}

    @Get()
    getHello(): string {
        return this.candidatesService.getHello();
    }

    @Post('/login')
    @HttpCode(200)
    create(@Body() authCandidateDto: AuthCandidateDto): string {
        console.log('authCandidateDto', authCandidateDto);
        return 'success';
    }
}
