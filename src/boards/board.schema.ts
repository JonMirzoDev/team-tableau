// src/boards/board.schema.ts

import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true }, // or mongoose.Schema.Types.ObjectId for referencing a User model
  createdAt: { type: Date, default: Date.now },
});
