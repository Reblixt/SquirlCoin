import express from 'express';
import mainRouter from './Router.mjs';
import { fullEndpoint } from './config/settings.mjs';
import Blockchain from './models/Blockchain.mjs';
import RedisServer from './redisServer.mjs';

export const blockchain = new Blockchain();
export const redisServer = new RedisServer({ blockchain });

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.blockchain = blockchain;
  req.redisServer = redisServer;
  next();
});

app.use(fullEndpoint.base, mainRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
