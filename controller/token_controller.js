require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

function create_token(id){
    const token = jwt.sign({id}, process.env.SECRET, {expiresIn: 86400})
    return token
}

function middleware(req, res, next){
    const token = req.cookies['x-access-token'];
    if (!token){
      return res.render('error/error_403.html');
    } 

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err){
        return res.render('error/error_403.html');
      } 
      next();
    });
}

module.exports.get_token = create_token
module.exports.verify_token = middleware