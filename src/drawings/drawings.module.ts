import { Module } from '@nestjs/common';
import { DrawingsService } from './drawings.service';
import { DrawingsController } from './drawings.controller';

@Module({
  providers: [DrawingsService],
  controllers: [DrawingsController],
})
export class DrawingsModule {}
