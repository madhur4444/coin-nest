import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinsController } from './coins/coins.controller';

@Module({
  imports: [],
  controllers: [AppController, CoinsController],
  providers: [AppService],
})
export class AppModule {}
