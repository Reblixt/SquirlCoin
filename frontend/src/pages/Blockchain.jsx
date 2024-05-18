import React, { useEffect, useState } from 'react'
import { useBlockchain } from '../hooks/useBlockchain';

export const Blockchain = () => {

  const { blockchain, loading, error } = useBlockchain();

  return (
    <div>
      <h2>Squirl Chain</h2>
      <section>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
        {blockchain.map((block) => (
          <div className="block-wrapper" key={block.blockIndex}>
            <div>Blockindex: {block.blockIndex}</div>
            <div>Previous Blockhash: {block.previousBlockHash}</div>
            <div>Current Blockchain: {block.currentBlockHash}</div>
            <div>Timestamp: {block.timestamp}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
