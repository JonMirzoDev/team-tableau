import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { UsersModule } from './users/users.module';
import { DrawingsModule } from './drawings/drawings.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BoardsModule,
    UsersModule,
    DrawingsModule,
    MongooseModule.forRoot(`${process.env.DB_PASSWORD}`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
