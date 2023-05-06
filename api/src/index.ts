import express from "express";
import cors from "./middlewares/cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);

const PORT = 4000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
