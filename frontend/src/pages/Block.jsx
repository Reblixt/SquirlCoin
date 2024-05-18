import React, { useState } from 'react'
import { useBlockchain } from '../hooks/useBlockchain';

export const Block = () => {

  const { blockchain, loading, error } = useBlockchain();
  const [indexNumber, setIndexNumber] = useState("");
  const [block, setBlock] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredBlock = blockchain.find((block) => block.blockIndex === parseInt(indexNumber))
    console.log(filteredBlock);
    setBlock(filteredBlock || "Block not found")
  }

  return (
    <div>
      <h2>Enskilt block</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="block-number">Block index nummer</label>
        <input type="text" id="block-number" name="block-number" onChange={(e) => setIndexNumber(e.target.value)}></input>
        <button>Submit</button>
      </form>
      <section>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
        {block && (
          <div>
          {typeof block === 'string' ? (
            <div>{block}</div>
          ) : (
          <div>
            <div>Blockindex: {block.blockIndex}</div>
            <div>Previous Blockhash: {block.previousBlockHash}</div>
            <div>Current Blockchain: {block.currentBlockHash}</div>
            <div>Timestamp: {block.timestamp}</div>
          </div>
        )}
        </div>
        )}
      </section>
    </div>
  )
}
