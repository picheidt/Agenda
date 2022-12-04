require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const deasync = require('deasync')

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

function get_id(token){
    var id = null
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      id = decoded.id
    })

    while ((id==null)) {
      deasync.runLoopOnce()
    }
    return id
}



module.exports.get_token = create_token
module.exports.verify_token = middleware
module.exports.get_id = get_id