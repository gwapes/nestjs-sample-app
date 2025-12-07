import { Module } from '@nestjs/common';
import { JediController, MTGController } from './controllers';
import { JediService, MtgService } from './providers/services';

@Module({
    imports: [],
    controllers: [JediController, MTGController],
    providers: [JediService, MtgService],
})
export class AppModule { }
