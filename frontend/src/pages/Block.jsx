import { useState } from 'react'
import { useBlockchain } from '../hooks/useBlockchain';
import { useBlock } from '../hooks/useBlock';
import logo from '../content/img/sqrrrl-logo.png';

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
    <div className="block-container">
      <img src={logo} alt="Logo" className="mobile-logo" />
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
            <div>Previous Blockhash: {block.difficulty}</div>
            <div>Current Blockchain: {block.lastHash}</div>
            <div>Timestamp: {block.hash}</div>
            <div>Timestamp: {block.nonce}</div>
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
        )}
        </div>
        )}
      </section>
    </div>
  )
}