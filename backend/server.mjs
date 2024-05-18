import express from "express";
import cors from "cors";
import path from "path";
import Blockchain from "./models/Blockchain.mjs";
import RedisServer from "./redisServer.mjs";
import mainRouter from "./Router.mjs";
import { fullEndpoint } from "./config/settings.mjs";
import { loggEvent } from "./middleware/event-log.mjs";
import { handleError, handleUndefined } from "./middleware/error-handler.mjs";
import { fileURLToPath } from "url";
import { synchronizeChain } from "./utilities/utilities.mjs";

global.__appdir = path.dirname(fileURLToPath(import.meta.url));

export const blockchain = new Blockchain();
export const redisServer = new RedisServer({ blockchain });

const app = express();
app.use(express.json());
app.use(cors());

const DEFAULT_PORT = 5001;
const ROOT_NODE = `http://localhost:${DEFAULT_PORT}`;

let NODE_PORT;

setTimeout(() => {
  redisServer.broadcast();
}, 1000);

app.use((req, res, next) => {
  req.blockchain = blockchain;
  req.redisServer = redisServer;
  next();
});

app.use(loggEvent);
app.use(fullEndpoint.base, mainRouter);

if (process.env.GENERATE_NODE_PORT === "true") {
  NODE_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

app.all("*", handleUndefined);
app.use(handleError);

const PORT = NODE_PORT || DEFAULT_PORT;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  if (PORT !== DEFAULT_PORT) {
    await synchronizeChain(ROOT_NODE);
  }
});
