// src/drawings/drawings.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DrawingSchema } from './drawing.schema';
import { DrawingsService } from './drawings.service';
import { DrawingsController } from './drawings.controller';
import { DrawingsGateway } from './drawings.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Drawing', schema: DrawingSchema }]),
  ],
  providers: [DrawingsService, DrawingsGateway],
  controllers: [DrawingsController],
})
export class DrawingsModule {}
