import { Controller, Get } from '@nestjs/common';
import { forceFactory } from 'src/types';
import type { Jedi } from 'src/types';

@Controller('jedi')
export class JediController {
    @Get()
    findAll(): Jedi[] {
        return [
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
    }
}
