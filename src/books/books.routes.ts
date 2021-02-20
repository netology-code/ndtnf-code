import { Router } from "express";
import { container } from "../container";
import { BooksService } from './books.service';
const router = Router();

router.get("", async (req, res) => {
  const service = container.get(BooksService);
  const books = await service.findAll();
  res.json(books);
});

router.post("", async (req, res) => {
  const service = container.get(BooksService);
  const book = service.create(req.body);
  res.json(book);
});

module.exports = router;
