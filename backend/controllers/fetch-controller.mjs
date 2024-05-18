import { blockchain } from "../server.mjs";

export const listChain = (req, res, next) => {
  //const chain = blockchain.chain;
  res.status(200).json({ success: true, statusCode: 200, data: blockchain });
};

export const fetchOneBlock = (req, res, next) => {
  console.log(typeof req.params.blockNumber);
  console.log(typeof blockchain.chain[0].blockNumber);
  const block = blockchain.chain.find(
    (block) => block.blockNumber === parseInt(req.params.blockNumber),
  );
  if (!block) {
    return res
      .status(404)
      .json({ success: false, statusCode: 404, message: "Block not found" });
  }
  res.status(200).json({ success: true, statusCode: 200, data: block });
};
