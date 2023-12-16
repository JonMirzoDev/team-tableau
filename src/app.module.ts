import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { UsersModule } from './users/users.module';
import { DrawingsModule } from './drawings/drawings.module';

@Module({
  imports: [BoardsModule, UsersModule, DrawingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
