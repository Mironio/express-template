const express = require('express');
const router = express.Router();
const { handleTestPost } = require('../controllers/testController');

// POST endpoint /test
router.post('/', handleTestPost);

module.exports = router;
