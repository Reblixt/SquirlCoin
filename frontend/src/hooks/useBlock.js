import { useEffect, useState } from 'react';

export const useBlock = () => {
  const fetchBlock = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/v1/squirlchain/fetchsquirls/${id}`,
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
      console.log('fetch', result.data);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

  return { fetchBlock };
};
