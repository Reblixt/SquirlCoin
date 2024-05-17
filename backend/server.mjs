import express from 'express';
import mainRouter from './Router.mjs';
import { fullEndpoint } from './config/settings.mjs';
import { blockchain } from './blockchain.mjs';
import { transactionPool } from './transactionPool.mjs';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.blockchain = blockchain;
  req.transactionPool = transactionPool;
  next();
});

app.use(fullEndpoint.base, mainRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
