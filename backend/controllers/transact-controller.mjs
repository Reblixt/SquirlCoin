import { transactionPool } from '../server.mjs';
import { wallet } from '../server.mjs';

export const createTransaction = (req, res, next) => {
  const { recipient, amount } = req.body;
  const transaction = wallet.createTransaction({ recipient, amount });
  transactionPool.addTransaction(transaction);
  res.status(201).json({ success: true, statusCode: 201, data: transaction });
};
