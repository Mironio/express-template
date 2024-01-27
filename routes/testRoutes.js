const express = require('express');
const router = express.Router();
const { handleTestPost } = require('../controllers/testController');
const { validateName, validateAge } = require('../validators/commonValidators');
const validateRequest = require('../middleware/validateRequest');

router.post('/', validateRequest([validateName(), validateAge()]), handleTestPost);

module.exports = router;
