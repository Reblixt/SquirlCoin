import { blockchain } from "../server.mjs";

export const listChain = (req, res, next) => {
  const chain = blockchain.chain;
  res.status(200).json({ success: true, statusCode: 200, data: chain });
};

//export const fetchOneBlock = (req, res, next) => {
//const
//}
