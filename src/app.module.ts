import { Module } from '@nestjs/common';
import { JediController, MTGController } from './controllers';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [JediController, MTGController],
    providers: [AppService],
})
export class AppModule { }
