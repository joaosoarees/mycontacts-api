module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow_Origin', 'http://localhost:3000');
  next();
};
