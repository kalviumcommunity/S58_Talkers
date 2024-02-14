// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
  