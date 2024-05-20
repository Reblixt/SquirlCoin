import { useEffect, useState } from 'react';

export const useBlockchain = () => {
  const [blockchain, setBlockchain] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockchain = async () => {
      try {
        const response = await fetch(
          'http://localhost:5001/api/v1/squirlchain/fetchsquirls',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setBlockchain(result.data.chain);
        setTransactions(result.data.transactions);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlockchain();
  }, []);

  return { transactions, blockchain, loading, error };
};
