import { Book } from "./books.model";
interface CreateBookDto {
  title: string;
  description: string;
  authors: string[];
  favorite: string;
  fileCover: string;
}
export class BooksService {
  constructor() {
    console.log("new BooksService");
  }

  async create(data: CreateBookDto) {
    const book = new Book(data);
    await book.save();
    return book;
  }

  findAll() {
    return Book.find();
  }
}
