import React, { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error('Erro ao buscar pedidos:', err));
  }, []);

  return (
    <div>
      <h1>Pedidos</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Pedido #{order.id}: {order.status} - Total: {order.total}€
          </li>
        ))}
      </ul>
    </div>
  );
}
