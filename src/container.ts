import { Container, decorate, injectable } from "inversify";
import { BooksService } from "./books/books.service";
export const container = new Container();

decorate(injectable(), BooksService);
container.bind(BooksService).toSelf().inSingletonScope();
