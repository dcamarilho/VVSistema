const express = require('express');
const router = express.Router();
const { getMessages, sendMessage } = require('../models/chat');

router.get('/', async (req, res) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar mensagens do chat' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId, text } = req.body;
    const newMessage = await sendMessage(userId, text);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar mensagem' });
  }
});

module.exports = router;
