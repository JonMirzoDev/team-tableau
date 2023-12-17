// src/drawings/drawings.gateway.ts

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DrawingsService } from './drawings.service';
import { CreateDrawingDto } from './dto/create-drawing.dto';

@WebSocketGateway({
  cors: {
    origin: '*', // Be sure to restrict this in production!
  },
})
export class DrawingsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly drawingsService: DrawingsService) {}

  @SubscribeMessage('draw')
  async handleDrawEvent(
    @MessageBody() createDrawingDto: CreateDrawingDto,
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const drawing = await this.drawingsService.create(createDrawingDto);
    client.emit('drawingAcknowledged', { success: true, drawing });
    console.log('drawing: ', drawing);
    client.broadcast.to(createDrawingDto.board).emit('drawing', drawing);
  }

  @SubscribeMessage('joinBoard')
  async handleJoinBoardEvent(
    @MessageBody() message: any, // Using 'any' for demonstration; you should use a proper DTO
    @ConnectedSocket() client: Socket,
  ): Promise<void> {
    const boardId = message.data;
    const drawings = await this.drawingsService.findByBoard(boardId);
    client.join(boardId);
    client.emit('previousDrawings', drawings);
  }

  // Additional WebSocket event handlers...
}
