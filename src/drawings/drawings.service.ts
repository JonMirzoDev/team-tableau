import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drawing } from './interfaces/drawing.interface';
import { CreateDrawingDto } from './dto/create-drawing.dto';

@Injectable()
export class DrawingsService {
  constructor(
    @InjectModel('Drawing') private readonly drawingModel: Model<Drawing>,
  ) {}

  async create(createDrawingDto: CreateDrawingDto): Promise<Drawing> {
    const createdDrawing = new this.drawingModel(createDrawingDto);
    return createdDrawing.save();
  }

  async findByBoard(boardId: string): Promise<Drawing[]> {
    return this.drawingModel.find({ board: boardId }).exec();
  }
}
