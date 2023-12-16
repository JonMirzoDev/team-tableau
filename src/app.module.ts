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
    MongooseModule.forRoot(
      'mongodb+srv://islomjonswe:5StGCP5iBtuM9AyP@cluster0.93yumqa.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
