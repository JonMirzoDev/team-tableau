export class CreateDrawingDto {
  readonly board: string;
  readonly strokes: StrokeDto[];
}

export class StrokeDto {
  readonly color: string;
  readonly width: number;
  readonly coordinates: number[][];
}
