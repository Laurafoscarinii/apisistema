const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const cors = require('cors');

const app = express();

// Conectar ao banco de dados MongoDB
connectDB();

// Middleware para processar JSON
app.use(express.json());

// Habilitar CORS (caso precise acessar a API de outro domínio)
app.use(cors());

// Usar as rotas da API
app.use('/api', apiRoutes);

// Exportar a função de handler para o Vercel
module.exports = app;
