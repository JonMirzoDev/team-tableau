import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardSchema } from './board.schema';
import { BoardsGateway } from './boards.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  providers: [BoardsService, BoardsGateway],
  controllers: [BoardsController],
})
export class BoardsModule {}
