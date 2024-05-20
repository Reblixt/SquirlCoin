import { redisServer } from "../server.mjs";
import { createHash } from "../utilities/crypto-lib.mjs";
import Block from "./Block.mjs";

export class Blockchain {
  constructor() {
    this.chain = [Block.genesis];
    this.transactions = [];
  }

  addBlock() {
    const lastBlock = this.chain[this.chain.length - 1];
    const data = this.transactions;
    const newBlock = Block.mineBlock({ lastBlock, data });
    this.chain.push(newBlock);
    redisServer.broadcast();
    this.transactions = [];
    return newBlock;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  replaceChain(chain) {
    if (chain.length <= this.chain.length) return;
    if (!Blockchain.validateChain(chain)) return;
    this.chain = chain;
  }

  static validateChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];

      const currentLastHash = chain[i - 1].hash;
      const lastDifficulty = chain[i - 1].difficulty;

      if (lastHash !== currentLastHash) return false;
      if (Math.abs(lastDifficulty - difficulty) > 1) return false;

      const validatedHash = createHash(
        timestamp,
        lastHash,
        data,
        nonce,
        difficulty,
      );
      if (hash !== validatedHash) return false;
    }
    return true;
  }
}

export default Blockchain;
