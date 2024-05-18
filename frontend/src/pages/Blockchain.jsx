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
          <div className="block-wrapper" key={block.blockNumber}>
            <div><span>Block index:</span><span>{block.blockNumber}</span></div>
            <div><span>Mining difficulty: </span><span>{block.difficulty}</span></div>
            <div><span>Previous Blockhash: </span><span>{block.lastHash}</span></div>
            <div><span>Current Blockchain: </span><span>{block.hash}</span></div>
            <div><span>Nonce: </span><span>{block.nonce}</span></div>
            {console.log(block.data)}
            <div className="data-wrapper">
              <h4>Data:</h4>
              
                {block.data !== "[]" ? ( 
                  block.data.map((transaction, index) => (
                    <div key={index}>
                      <span>Sender: {transaction.sender}</span>
                      <span>Recipient: {transaction.recipient}</span>
                      <span>Amount: {transaction.amount}</span>
                      <span>Data: {transaction.data}</span>
                    </div> ))
                ) : ( 
                <></>
              )}
              
            </div>
            <div><span>Timestamp: </span><span>{block.timestamp}</span></div>
          </div>
        ))}
      </section>
    </div>
  )
}
