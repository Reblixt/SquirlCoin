import redis from "redis";

const CHANNELS = {
  BLOCKCHAIN: "BLOCKCHAIN",
  TRANSACTIONS: "TRANSACTIONS"
};

export default class RedisServer {
  constructor({ blockchain }) {
    this.blockchain = blockchain;

    this.publisher = redis.createClient();
    this.subscriber = redis.createClient();

    this.loadChannels();

    this.subscriber.on("message", (channel, message) =>
      this.messageHandler(channel, message),
    );
  }

  broadcastTransaction(transaction) {
    this.publish({
      channel: CHANNELS.TRANSACTIONS,
      message: JSON.stringify(transaction),
    });
  }

  broadcast() {
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain.chain),
    });
  }

  loadChannels() {
    Object.values(CHANNELS).forEach((channel) =>
      this.subscriber.subscribe(channel),
    );
  }

  messageHandler(channel, message) {
    const msg = JSON.parse(message);

    if (channel === CHANNELS.BLOCKCHAIN) {
      this.blockchain.replaceChain(msg);
    }
    if (channel === CHANNELS.TRANSACTIONS){
      this.blockchain.addTransaction(msg)
    }
  }

  publish({ channel, message }) {
    this.publisher.publish(channel, message);
  }
}
