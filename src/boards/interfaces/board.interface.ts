// src/boards/interfaces/board.interface.ts

import { Document } from 'mongoose';

export interface Board extends Document {
  readonly name: string;
  readonly creator: string; // or use type mongoose.Schema.Types.ObjectId if you are referencing a User model
  readonly createdAt: Date;
}
