import { Document } from 'mongoose';

interface Stroke {
  color: string;
  width: number;
  coordinates: number[][];
}

export interface Drawing extends Document {
  board: string;
  strokes: Stroke[];
  createdAt: Date;
}
