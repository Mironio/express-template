const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/test', (req, res) => {
  // Echo the received request body back to the client
  res.status(200).json({
    message: 'Data received successfully',
    yourData: req.body,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

