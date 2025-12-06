import { Module } from '@nestjs/common';
import { AppController, JediController, MTGController } from './controllers';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController, JediController, MTGController],
    providers: [AppService],
})
export class AppModule { }
