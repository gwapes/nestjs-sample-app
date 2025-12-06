import { Module } from '@nestjs/common';
import { AppController, JediController } from './controllers';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController, JediController],
    providers: [AppService],
})
export class AppModule { }
