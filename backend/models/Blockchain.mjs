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
    this.transactions = [];
    return newBlock;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  replaceChain(chain) {
    if (chain.length <= this.chain.length) return;
    if (!Blockchain.ValidChain(chain)) return;
    this.chain = chain;
  }

  validateChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.lastHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

export default Blockchain;
