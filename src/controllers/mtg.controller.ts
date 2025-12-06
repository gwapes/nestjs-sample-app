import { Controller, Get, Param, Query } from '@nestjs/common';
import type { Card } from 'src/types';
import { COLOR, TYPE } from 'src/types'

const cards: Card[] = [
    {
        _id: 'apc-121',
        name: 'Spiritmonger',
        type: TYPE.CREATURE,
        color: COLOR.MULTI
    },
    {
        _id: 'ulg-110',
        name: 'Rancor',
        type: TYPE.ENCHANT,
        color: COLOR.GREEN
    },
    {
        _id: 'clb-187',
        name: 'Lightning Bolt',
        type: TYPE.INSTANT,
        color: COLOR.RED
    },
    {
        _id: 'dmr-416',
        name: 'Wrath of God',
        type: TYPE.SORCERY,
        color: COLOR.WHITE
    },
    {
        _id: '2xm-056',
        name: 'Jace, the Mind Sculptor',
        type: TYPE.WALKER,
        color: COLOR.BLUE
    },
    {
        _id: 'pip-349',
        name: 'Tarmogoyf',
        type: TYPE.CREATURE,
        color: COLOR.GREEN
    },
    {
        _id: '2x2-403',
        name: 'City of Brass',
        type: TYPE.LAND,
        color: COLOR.LESS
    },
    {
        _id: 'ema-049',
        name: 'Force of Will',
        type: TYPE.INSTANT,
        color: COLOR.BLUE
    },
    {
        _id: 'ths-107',
        name: 'Thoughtseize',
        type: TYPE.SORCERY,
        color: COLOR.BLACK
    },
    {
        _id: 'uds-139',
        name: 'Thran Dynamo',
        type: TYPE.ARTIFACT,
        color: COLOR.LESS
    }
];

@Controller('mtg')
export class MTGController {
    @Get('cards')
    findAll(@Query('type') type?: TYPE, @Query('color') color?: COLOR): Card[] {
        const result: Card[] = cards.filter((c) => {
            const type_match: boolean = !!(!type || c.type === type)
            const color_match: boolean = !!(!color || c.color === color)

            return type_match && color_match
        });

        return result
    }

    @Get('cards/:id')
    findOne(@Param('id') id: string): Card {
        return cards.find((c) => c._id === id) || {} as Card
    }
}
