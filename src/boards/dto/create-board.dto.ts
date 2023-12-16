// src/boards/dto/create-board.dto.ts

export class CreateBoardDto {
  readonly name: string;
  readonly creator: string; // or use type mongoose.Schema.Types.ObjectId if referencing a User model
}
