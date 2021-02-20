import "reflect-metadata";

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const booksRouter = require("./books/books.routes");

require("./db_connection");
require("./container");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRouter);

const listener = app.listen(8080, function () {
  console.log("Listening on http://localhost:8080");
});
