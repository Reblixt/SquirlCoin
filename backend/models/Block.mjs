import hexToBinary from "hex-to-binary";
import { GENESIS_DATA, MINE_RATE } from "../config/settings.mjs";
import { createHash } from "../utilities/crypto-lib.mjs";

class Block {
  constructor({
    timestamp,
    blockNumber,
    lastHash,
    hash,
    data,
    nonce,
    difficulty,
  }) {
    this.timestamp = timestamp;
    this.blockNumber = blockNumber;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static get genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    const lastHash = lastBlock.hash;
    const lastBlockNumber = lastBlock.blockNumber;

    let { difficulty } = lastBlock;
    let hash, timestamp;
    let nonce = 0;

    do {
      nonce++;
      timestamp = Date.now();
      difficulty = Block.adjustDifficultyLevel({ block: lastBlock, timestamp });
      hash = createHash(timestamp, lastHash, data, nonce, difficulty);
    } while (
      hexToBinary(hash).substring(0, difficulty) !== "0".repeat(difficulty)
    );

    return new this({
      timestamp,
      lastHash,
      blockNumber: lastBlockNumber + 1,
      hash,
      data,
      nonce,
      difficulty,
    });
  }

  static adjustDifficultyLevel({ block, timestamp }) {
    const { difficulty } = block;
    if (difficulty === 0) return difficulty + 1;
    if (timestamp - block.timestamp > MINE_RATE) return difficulty - 1;

    return difficulty + 1;
  }
}

export default Block;
