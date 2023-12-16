import { Module } from '@nestjs/common';
import { DrawingsService } from './drawings.service';
import { DrawingsController } from './drawings.controller';
import { DrawingsGateway } from './drawings.gateway';

@Module({
  providers: [DrawingsService, DrawingsGateway],
  controllers: [DrawingsController],
})
export class DrawingsModule {}
