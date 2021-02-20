import { Router } from "express";
import { container } from "../container";
const router = Router();

router.get("", async (req, res) => {
  const service: any = container.get("BOOKS_SERVICE");
  const books = await service.findAll();
  res.json(books);
});

router.post("", async (req, res) => {
  const service: any = container.get("BOOKS_SERVICE");
  const book = service.create(req.body);
  res.json(book);
});

module.exports = router;
