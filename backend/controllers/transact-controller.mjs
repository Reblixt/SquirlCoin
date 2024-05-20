import { blockchain, redisServer } from "../server.mjs";
import ResponseModel from "../models/ResponseModel.mjs";

export const createTransaction = (req, res, next) => {
  const { sender, recipient, amount } = req.body;
  let { data } = req.body;
  if (!data) {
    data = "No additional data provided for this transaction";
  }
  const transaction = { sender, recipient, amount, data };
  blockchain.addTransaction(transaction);

  res.status(201).json(ResponseModel.post('', transaction));
};
