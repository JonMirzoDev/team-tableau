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
}
