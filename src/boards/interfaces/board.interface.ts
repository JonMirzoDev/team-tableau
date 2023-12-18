// src/boards/interfaces/board.interface.ts

import { Document } from 'mongoose';

export interface Board extends Document {
  readonly name: string;
  readonly createdAt: Date;
}
