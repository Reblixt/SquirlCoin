import { useState } from 'react'
import { useTransact } from '../hooks/useTransact';
import { useBlockchain } from '../hooks/useBlockchain';
import logo from '../content/img/sqrrrl-logo.png';

export const Transact = () => {

  const initialTransactionState = { recipient: '', amount: 0, sender: '', data: ""};
  const [transactionBody, setTransactionBody] = useState(initialTransactionState);
  const [displayTrades, setDisplayTrades] = useState(false);
  const {transaction, sendTransaction} = useTransact();
  const { transactions } = useBlockchain();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTransactionBody((prevState) => ({
      ...prevState, [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTransaction(transactionBody)
    setTransactionBody(initialTransactionState)
  }

  const duplicateTx = (data) => {
    setTransactionBody({ recipient: data.recipient, amount: data.amount, sender: data.sender, data: data.data})
  }

  return (
    <div className="transact-container">
      <img src={logo} alt="Logo" className="mobile-logo" />
      <h2>Nut trading</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trading-recipient">Send to</label>
        <input type="text" id="trading-recipient" name="recipient" value={transactionBody.recipient} onChange={handleChange}></input>
        <label htmlFor="trading-amount">Amount</label>
        <input type="text" id="trading-amount" name="amount" value={transactionBody.amount} onChange={handleChange}></input>
        <label htmlFor="trading-sender">Send from</label>
        <input type="text" id="trading-sender" name="sender" value={transactionBody.sender} onChange={handleChange}></input>
        <label htmlFor="trading-data">Message</label>
        <input type="text" id="trading-data" name="data" value={transactionBody.data} onChange={handleChange}></input>
        <button>Submit</button>
      </form>
      {transaction && 
      <section>
        Info about the latest transaction that has been qued:
        <span>recipient: {transaction.recipient}</span>
        <span>amount: {transaction.amount}</span>
        <span>sender: {transaction.sender}</span>
        <span>data: {transaction.data}</span>
        <button onClick={() => duplicateTx(transaction)}>Copy transaction</button>
      </section>
      }
      <section>
        <button onClick={() => setDisplayTrades(prevState => !prevState)}>Show/hide previous transactions in queue</button>
        {displayTrades && 
        <>
        Displaying info about all transactions that are in the queue:
        {transactions && 
        transactions.map((nuttrade, index) => 
        <div key={index}>
        <span>Sender: {nuttrade.sender}</span>
        <span>Recipient: {nuttrade.recipient}</span>
        <span>Amount: {nuttrade.amount}</span>
        <span>Data: {nuttrade.data}</span>
        <button onClick={() => duplicateTx(nuttrade)}>Copy transaction</button>
        </div>)
        }
        </>
        }
      </section>
    </div>
  )
}