const express = require('express');
const router = express.Router();
const { getOrders, createOrder, updateOrder, deleteOrder } = require('../models/orders');

router.get('/', async (req, res) => {
  try {
    const orders = await getOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newOrder = await createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await updateOrder(req.params.id, req.body);
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await deleteOrder(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pedido' });
  }
});

module.exports = router;
