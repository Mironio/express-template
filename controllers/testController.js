const handleTestPost = (req, res) => {
  // Your logic for handling the POST request
  res.status(200).json({
    message: 'Data received successfully',
    data: req.body
  });
};

module.exports = {
  handleTestPost
};
