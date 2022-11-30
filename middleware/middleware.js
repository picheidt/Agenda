require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


function verifyToken(req, res, next){
    console.log(req.cookies)
    const token = req.cookies['x-access-token'];
    if (!token){
      return res.render('error_403.html');
    } 

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err){
        return res.render('error_403.html');
      } 
      next();
    });
}

module.exports = verifyToken