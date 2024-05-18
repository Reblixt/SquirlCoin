import express from 'express';
import cors from 'cors';
import mainRouter from './Router.mjs';
import { fullEndpoint } from './config/settings.mjs';
import Blockchain from './models/Blockchain.mjs';
import RedisServer from './redisServer.mjs';
import { loggEvent } from './middleware/event-log.mjs';
import { handleError, handleUndefined } from './middleware/error-handler.mjs';
import { fileURLToPath } from 'url';
import path from 'path';

global.__appdir = path.dirname(fileURLToPath(import.meta.url));

export const blockchain = new Blockchain();
export const redisServer = new RedisServer({ blockchain });

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.blockchain = blockchain;
  req.redisServer = redisServer;
  next();
});

app.use(loggEvent);
app.use(fullEndpoint.base, mainRouter);

app.all('*', handleUndefined);
app.use(handleError);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
