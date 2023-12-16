// src/drawings/interfaces/drawing.interface.ts

import { Document } from 'mongoose';

interface Stroke {
  color: string;
  width: number;
  coordinates: number[][]; // Array of [x, y] pairs
}

export interface Drawing extends Document {
  board: string; // Reference to the board ID
  strokes: Stroke[];
  createdAt: Date;
}
