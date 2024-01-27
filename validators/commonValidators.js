const { body } = require('express-validator');

const validateName = () => {
  return body('name').isString().withMessage('Name must be a string').trim().escape();
};

const validateAge = () => {
  return body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer').toInt();
};

module.exports = {
  validateName,
  validateAge
};
