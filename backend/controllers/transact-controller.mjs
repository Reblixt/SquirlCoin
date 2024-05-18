import { blockchain, redisServer } from "../server.mjs";

export const createTransaction = (req, res, next) => {
  const { sender, recipient, amount } = req.body;
  const transaction = { sender, recipient, amount };
  blockchain.addTransaction(transaction);

  res.status(201).json({ success: true, statusCode: 201, data: transaction });
};
