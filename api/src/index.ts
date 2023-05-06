import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send("Hello world!");
});

const PORT = 4000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
