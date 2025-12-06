import { Controller, Get, Post, Body } from '@nestjs/common';
import { forceFactory } from 'src/types';
import type { Jedi } from 'src/types';

@Controller('jedi')
export class JediController {
    jedi: Jedi[] = [
        {
            name: 'Luke Skywalker',
            force: forceFactory('light'),
            lightsaber: 'green',
            homePlanet: 'Tatooine'
        },
        {
            name: 'Darth Vader (formerly Anakin Skywalker)',
            force: forceFactory('dark'),
            lightsaber: 'red',
            homePlanet: 'Tatooine'
        }
    ]

    @Get()
    findAll(): Jedi[] {
        return this.jedi
    }

    @Post()
    async create(@Body() request: Jedi) {
        this.jedi.push(request)
    }
}
