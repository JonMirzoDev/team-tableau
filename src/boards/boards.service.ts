import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from './interfaces/board.interface';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    const createdBoard = new this.boardModel(createBoardDto);
    return createdBoard.save();
  }

  async join(boardId: string, userNickname: string): Promise<Board> {
    // Here you would add the logic to add a user to the board.
    // For example, you might push the user's nickname to an array of participants.
    // This is a simplified version and assumes you have a participants field in your schema.
    return this.boardModel
      .findByIdAndUpdate(
        boardId,
        { $push: { participants: userNickname } },
        { new: true },
      )
      .exec();
  }

  async findAll(): Promise<Board[]> {
    return this.boardModel.find().exec();
  }

  // Other service methods...
}
