import { Controller, Get, Param, Query } from '@nestjs/common';
import { MtgService } from '../providers/services';
import type { Card } from 'src/types';
import { COLOR, TYPE } from 'src/types'



@Controller('mtg')
export class MTGController {
    constructor(private mtgService: MtgService) { }

    @Get('cards')
    findAll(@Query('type') type?: TYPE, @Query('color') color?: COLOR): Card[] {
        return this.mtgService.findAll(type, color)
    }

    @Get('cards/:id')
    findOne(@Param('id') id: string): Card {
        return this.mtgService.findOne(id)
    }
}
