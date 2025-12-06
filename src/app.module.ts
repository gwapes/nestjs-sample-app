import { Module } from '@nestjs/common';
import { JediController, MTGController } from './controllers';

@Module({
    imports: [],
    controllers: [JediController, MTGController],
    providers: [],
})
export class AppModule { }
