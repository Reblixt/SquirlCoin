import React, { useState } from 'react'
import { useTransact } from '../hooks/useTransact';

export const Transact = () => {

  const [transactionBody, setTransactionBody] = useState({reciever: "", amount: 0, sender: ""});
  const {transaction, sendTransaction} = useTransact();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setTransactionBody((prevState) => ({
      ...prevState, [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTransaction(transactionBody)
  }


  return (
    <div>
      <h2>Nut trading</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trading-reciever">Skicka till</label>
        <input type="text" id="trading-reciever" name="reciever" onChange={handleChange}></input>
        <label htmlFor="trading-amount">Antal</label>
        <input type="text" id="trading-amount" name="amount" onChange={handleChange}></input>
        <label htmlFor="trading-sender">Skicka från</label>
        <input type="text" id="trading-sender" name="sender" onChange={handleChange}></input>
        <button>Submit</button>
      </form>
      <section>
        Här visas info om transaktionen:
      </section>
    </div>
  )
}
