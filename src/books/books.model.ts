import mongoose, { Document, Schema } from "mongoose";
import { Book } from './book';

const schema = new Schema({
  title: String,
  description: String,
  authors: [String],
  favorite: String,
  fileCover: String
});

export const BookModel = mongoose.model<Book & Document>("Book", schema);

