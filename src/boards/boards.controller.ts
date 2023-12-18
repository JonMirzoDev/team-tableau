import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './interfaces/board.interface';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  async create(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.create(createBoardDto);
  }

  @Post(':boardId/join')
  @HttpCode(HttpStatus.OK)
  async join(
    @Param('boardId') boardId: string,
    @Body('nickname') userNickname: string,
  ): Promise<{ message: string; board: Board }> {
    const board = await this.boardsService.join(boardId, userNickname);
    return {
      message: `User ${userNickname} has successfully joined the board.`,
      board,
    };
  }

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardsService.findAll();
  }
}
