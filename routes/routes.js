const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser').urlencoded({extended:false})
const verifyToken = require('../middleware/middleware')
var contatos = require('../model/crud_contatos')
// rota que retorna a tela de listar

router.get('/login', bodyParser, (req, res) => {
    
})

router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})

router.get('/', (req, res)=>{
    res.render('login.html')
})

router.get('/cadastro', (req, res) =>{
    res.render('cadastro.html')
})

router.post('/salvar_contato', (req,res) =>{
    var nome = req.body.nome
    var email = req.body.email
    var tel = req.body.tel
    contatos.salvar(noem, email, tel)
})

module.exports = router