const pool = require('./database');

async function getTrackingData() {
  const result = await pool.query('SELECT * FROM pedidos WHERE status != $1', ['concluído']);
  return result.rows;
}

module.exports = { getTrackingData };
