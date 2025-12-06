import { Controller, Get } from '@nestjs/common';
import { Card, COLOR, TYPE } from 'src/types';

const cards: Card[] = [
    {
        name: 'Spiritmonger',
        type: TYPE.CREATURE,
        color: COLOR.MULTI
    },
    {
        name: 'Rancor',
        type: TYPE.ENCHANT,
        color: COLOR.GREEN
    },
    {
        name: 'Lightning Bolt',
        type: TYPE.INSTANT,
        color: COLOR.RED
    },
    {
        name: 'Wrath of God',
        type: TYPE.SORCERY,
        color: COLOR.WHITE
    },
    {
        name: 'Jace, the Mind Sculptor',
        type: TYPE.WALKER,
        color: COLOR.BLUE
    },
    {
        name: 'Tarmogoyf',
        type: TYPE.CREATURE,
        color: COLOR.GREEN
    },
    {
        name: 'City of Brass',
        type: TYPE.LAND,
        color: COLOR.LESS
    },
    {
        name: 'Force of Will',
        type: TYPE.INSTANT,
        color: COLOR.BLUE
    },
    {
        name: 'Thoughtseize',
        type: TYPE.SORCERY,
        color: COLOR.BLACK
    },
    {
        name: 'Thran Dynamo',
        type: TYPE.ARTIFACT,
        color: COLOR.LESS
    }
];

@Controller('mtg')
export class MTGController {
    @Get('cards')
    findAll(): Card[] { return cards }
}
