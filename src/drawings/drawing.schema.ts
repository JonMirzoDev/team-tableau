// src/drawings/drawing.schema.ts

import * as mongoose from 'mongoose';

export const DrawingSchema = new mongoose.Schema({
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  strokes: [
    {
      color: String,
      width: Number,
      coordinates: [{ x: Number, y: Number }],
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
