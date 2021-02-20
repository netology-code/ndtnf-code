import { Book } from "./books.model";

export class BooksService {
  constructor() {
    console.log("new BooksService");
  }

  async create(data: any) {
    const book = new Book(data);
    await book.save();
    return book;
  }

  findAll() {
    return Book.find();
  }
}
