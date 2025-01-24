const pool = require('./database');

async function processPayment(orderId, method, amount) {
  const result = await pool.query(
    'INSERT INTO pagamentos (pedido_id, metodo, valor) VALUES ($1, $2, $3) RETURNING *',
    [orderId, method, amount]
  );
  return result.rows[0];
}

module.exports = { processPayment };
