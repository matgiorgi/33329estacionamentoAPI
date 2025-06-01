const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Importa os endpoints da API
const entryRouter = require('./endpoints/entry');
const exitRouter = require('./endpoints/exit');
const checkRouter = require('./endpoints/check');

// Define rotas da API com prefixo /api
app.use('/api/entry', entryRouter);   // POST entrada
app.use('/api/exit', exitRouter);     // PATCH saída
app.use('/api/check', checkRouter);   // GET consulta

// Servir arquivos estáticos do frontend (index.html, style.css, app.js)
app.use(express.static(path.join(__dirname, 'public')));

// Rota raiz opcional (serve index.html explicitamente)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
