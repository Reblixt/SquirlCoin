import express from "express";
import mainRouter from "./Router.mjs";
import { fullEndpoint } from "./config/settings.mjs";

const app = express();

app.use(express.json());

app.use(fullEndpoint.base, mainRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
