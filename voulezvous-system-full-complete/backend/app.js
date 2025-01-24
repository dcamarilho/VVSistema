const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rotas
const authRoutes = require('./routes/auth');
const ordersRoutes = require('./routes/orders');
const trackingRoutes = require('./routes/tracking');
const chatRoutes = require('./routes/chat');
const rfidRoutes = require('./routes/rfid');
const cashbackRoutes = require('./routes/cashback');
const paymentsRoutes = require('./routes/payments');
const logsRoutes = require('./routes/logs');
const voxRoutes = require('./routes/vox');

app.use('/api/auth', authRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/tracking', trackingRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/rfid', rfidRoutes);
app.use('/api/cashback', cashbackRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/logs', logsRoutes);
app.use('/api/vox', voxRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
