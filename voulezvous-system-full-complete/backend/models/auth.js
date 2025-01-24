const pool = require('./database');

async function loginUser(email, password) {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if (result.rows.length && result.rows[0].password === password) {
    return result.rows[0];
  }
  return null;
}

async function registerUser(data) {
  const { name, email, password } = data;
  const result = await pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );
  return result.rows[0];
}

module.exports = { loginUser, registerUser };
