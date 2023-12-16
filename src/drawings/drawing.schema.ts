// drawing.schema.ts
import * as mongoose from 'mongoose';

export const DrawingSchema = new mongoose.Schema({
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  path: Array,
  color: String,
  // other properties...
});
