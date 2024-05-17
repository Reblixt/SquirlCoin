import { blockchain, redisServer } from '../server.mjs';

export const createBlock = (req, res, next) => {
  const data = req.body;
  const block = blockchain.addBlock({ data });
  redisServer.broadcast();
  res.status(201).json({ success: true, statusCode: 201, data: block });
};
