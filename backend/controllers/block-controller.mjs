import { blockchain, redisServer } from "../server.mjs";
import ResponseModel from "../models/ResponseModel.mjs";

export const createBlock = (req, res, next) => {
  const block = blockchain.addBlock();
  redisServer.broadcast();
  res.status(201).json(ResponseModel.post('', block));
};
