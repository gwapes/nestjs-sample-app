import { Controller, Get, Post, Body } from '@nestjs/common';
import { JediService } from 'src/providers/services';
import type { Jedi } from 'src/types';

@Controller('jedi')
export class JediController {
    constructor(private jediService: JediService) { }

    @Get()
    findAll(): Jedi[] {
        return this.jediService.findAll()
    }

    @Post()
    async create(@Body() request: Jedi) {
        this.jediService.create(request)
    }
}
