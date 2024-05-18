import { blockchain, redisServer } from "../server.mjs";

export const createTransaction = (req, res, next) => {
  const { sender, recipient, amount } = req.body;
  let { data } = req.body;
  if (!data) {
    data = "No additional data provided for this transaction";
  }
  const transaction = { sender, recipient, amount, data };
  blockchain.addTransaction(transaction);

  res.status(201).json({ success: true, statusCode: 201, data: transaction });
};
