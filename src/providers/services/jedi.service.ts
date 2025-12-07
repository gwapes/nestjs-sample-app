import { Injectable } from '@nestjs/common';
import { forceFactory } from '../../types';
import type { Jedi } from '../../types'

@Injectable()
export class JediService {
    private readonly jedi: Jedi[] = [
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

    findAll(): Jedi[] {
        return this.jedi
    }

    create(request: Jedi) {
        this.jedi.push(request)
    }
}
