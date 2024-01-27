const express = require('express');
const testRoutes = require('./routes/testRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Mount the testRoutes on the /test path
app.use('/test', testRoutes);

// Global Error Handling Middleware should come after all other app.use() and route calls
app.use((err, req, res, next) => {
  // Log the error, if needed
  console.error(err.stack);

  // Check if the response is already sent
  if (res.headersSent) {
    return next(err);
  }

  // Respond with 500 "Internal Server Error" code and a generic message, or customize as needed
  res.status(500).send('Something broke!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
