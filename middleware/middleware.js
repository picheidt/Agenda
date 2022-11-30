require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    console.log(req.cookies)
    const token = req.cookies['x-access-token'];
    if (!token){
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    } 

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err){
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      } 
      next();
    });
}

module.exports = verifyToken