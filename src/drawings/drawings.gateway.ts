import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class DrawingsGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('draw')
  handleDrawEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ): void {
    // Broadcast the drawing data to all clients except the sender
    client.broadcast.to(data.boardId).emit('draw', data);
  }

  @SubscribeMessage('joinBoard')
  handleJoinBoard(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ): void {
    client.join(data.boardId);
  }
}
