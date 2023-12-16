// src/drawings/dto/create-drawing.dto.ts

export class CreateDrawingDto {
  readonly board: string; // Board ID
  readonly strokes: StrokeDto[];
}

export class StrokeDto {
  readonly color: string;
  readonly width: number;
  readonly coordinates: number[][]; // Array of x, y pairs
}
