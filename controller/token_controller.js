require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const deasync = require('deasync')
const crud_token = require('../model/crud_token')

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

      // verifica na blacklist
      result = crud_token.read_token(token)
      if (result.length == 0){
        next();
      }else{
        res.render('error/error_403.html')
      }
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

function invalidate_token(req, res){
    token = req.cookies['x-access-token']
    crud_token.insert_token(token)
    res.redirect('/')
}

module.exports.get_token = create_token
module.exports.verify_token = middleware
module.exports.get_id = get_id
module.exports.invalidate_token = invalidate_token