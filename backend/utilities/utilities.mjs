import { fullEndpoint } from "../config/settings.mjs";
import { blockchain } from "../server.mjs";

export const synchronizeChain = async (ROOT_NODE) => {
  const response = await fetch(`${ROOT_NODE}${fullEndpoint.fetchAll}`);
  if (response.ok) {
    const result = await response.json();
    blockchain.replaceChain(result.data);
  }
};
