const express = require('express')
const router = express.Router()

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser').urlencoded({extended:false})


// função que verifica o token de autenticação
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

// rota que retorna a tela de listar
router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})

router.get('/listar_contatos', verifyToken, (req, res)=>{
    console.log('oi')
    res.send({teste:'oi'})
})

router.get('/', (req, res)=>{
    res.render('login.html')
})
module.exports = router