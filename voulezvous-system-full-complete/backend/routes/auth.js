const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../models/auth');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });
    res.json({ message: 'Login bem-sucedido', user });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'Usuário registrado com sucesso', user });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

module.exports = router;
