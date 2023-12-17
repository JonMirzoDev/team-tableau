// src/drawings/drawings.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { DrawingsService } from './drawings.service';
import { Drawing } from './interfaces/drawing.interface';

@Controller('boards/:boardId/drawings')
export class DrawingsController {
  constructor(private readonly drawingsService: DrawingsService) {}

  @Get()
  async findAll(@Param('boardId') boardId: string): Promise<Drawing[]> {
    return this.drawingsService.findByBoard(boardId);
  }
}
