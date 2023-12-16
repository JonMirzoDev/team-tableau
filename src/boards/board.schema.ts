// board.schema.ts
import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  creator: String,
  drawings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drawing' }],
});
