import React, { useState } from 'react'
import { useBlockchain } from '../hooks/useBlockchain';
import { useBlock } from '../hooks/useBlock';

export const Block = () => {

  const { fetchBlock } = useBlock();
  const [indexNumber, setIndexNumber] = useState("");
  const [block, setBlock] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchBlock(indexNumber)
    setBlock(result || "Block not found")
  }

  console.log(indexNumber);

  return (
    <div>
      <h2>Enskilt block</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="block-number">Block index nummer</label>
        <input type="text" id="block-number" name="block-number" onChange={(e) => setIndexNumber(e.target.value)}></input>
        <button>Submit</button>
      </form>
      <section>
        {block && (
          <div>
          {typeof block === 'string' ? (
            <div>{block}</div>
          ) : (
          <div>
            <div>Blockindex: {block.blockNumber}</div>
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
