import React, { useEffect, useState } from 'react';

export default function Cashback({ userId }) {
  const [cashback, setCashback] = useState(0);

  useEffect(() => {
    fetch(`/api/cashback/${userId}`)
      .then((res) => res.json())
      .then((data) => setCashback(data.cashback))
      .catch((err) => console.error('Erro ao obter cashback:', err));
  }, [userId]);

  return (
    <div>
      <h2>Seu Cashback</h2>
      <p>{cashback.toFixed(2)} €</p>
    </div>
  );
}
