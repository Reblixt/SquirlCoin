import ResponseModel from "../models/ResponseModel.mjs";
import { blockchain } from "../server.mjs";

export const listChain = (req, res, next) => {
  res.status(200).json(ResponseModel.get('', blockchain));
};

export const fetchOneBlock = (req, res, next) => {
  const block = blockchain.chain.find(
    (block) => block.blockNumber === parseInt(req.params.blockNumber),
  );
  if (!block) {
    return res
      .status(404)
      .json(ResponseModel.error(404, 'Block not found...'));
  }
  res.status(200).json(ResponseModel.get('', block));
};

