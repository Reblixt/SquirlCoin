import { blockchain, redisServer } from '../server.mjs';

export const createTransaction = (req, res, next) => {
  const { recipient, amount } = req.body;
  const transaction = { recipient, amount };
  blockchain.addTransaction(transaction);

  res.status(201).json({ success: true, statusCode: 201, data: transaction });
};
