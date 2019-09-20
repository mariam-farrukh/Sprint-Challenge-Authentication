const jwt = require("jsonwebtoken");
const secret = require("./secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(400).json({ message: "cannot enter" });
      } else {
        req.user = { username: decodedToken.username };
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'shall not pass!' });
  }
};
