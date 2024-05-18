import { useState } from 'react';

export const useTransact = () => {
  const [transaction, setTransaction] = useState(null);

  const sendTransaction = async (transactionBody) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/transaction', {
        method: 'POST',
        body: JSON.stringify(transactionBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setTransaction(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { transaction, sendTransaction };
};
