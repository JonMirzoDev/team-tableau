import { Controller, Post, Body, Param, Get } from '@nestjs/common';
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
  async join(
    @Param('boardId') boardId: string,
    @Body('nickname') userNickname: string,
  ): Promise<Board> {
    return this.boardsService.join(boardId, userNickname);
  }

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardsService.findAll();
  }
}
