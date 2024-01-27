const express = require('express');
const testRoutes = require('./routes/testRoutes');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Mount the testRoutes on the /test path
app.use('/test', testRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
