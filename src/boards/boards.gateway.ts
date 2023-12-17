import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: '/boards' })
export class BoardsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    // Handle new connection
  }

  handleDisconnect(client: Socket) {
    // Handle disconnection
  }

  @SubscribeMessage('draw')
  handleDraw(client: Socket, payload: any): void {
    // Broadcast the drawing action to all clients except the sender
    client.broadcast.emit('draw', payload);
  }
}
