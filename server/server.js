const express = require('express');
const gameRouter = require('./game');

const app = express(); 

app.use('/api/index', gameRouter);

app.get('/api', (req, res) => {
  res.send("<h2>It's port 9093</h2>")
});

app.listen(9093, () => {
  console.log('Node app start at port 9093');
});