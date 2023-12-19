import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
