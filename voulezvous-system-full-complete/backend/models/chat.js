const pool = require('./database');

async function getMessages() {
  const result = await pool.query('SELECT * FROM chat ORDER BY created_at DESC');
  return result.rows;
}

async function sendMessage(userId, text) {
  const result = await pool.query(
    'INSERT INTO chat (user_id, text) VALUES ($1, $2) RETURNING *',
    [userId, text]
  );
  return result.rows[0];
}

module.exports = { getMessages, sendMessage };
