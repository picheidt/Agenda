const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/middleware')
var contatos = require('../model/crud_contatos')
var login = require('../model/crud_login')
// rota que retorna a tela de listar

router.post('/login', (req, res) => {
    email = req.body.email;
    senha = req.body.password;
    login(email, senha);
})

router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})


router.get('/', (req, res)=>{
    res.render('login.html')
})


router.get('/edita', (req, res) => {
    res.render('edit.html', {id:1, nome:'aa', telefone:'4546', email:'vincius@dskhjk.com'})
})

router.post('/updateContato', (req, res) =>{
    var nome = req.body.nome
    var email = req.body.email
    var fone = req.body.fone
    contatos.editar(nome, email, fone);
})


router.get('/cadastro', verifyToken, (req, res) =>{
    res.render('cadastro.html')
})

router.post('/salvar_contato', (req,res) =>{
    var nome = req.body.nome
    var email = req.body.email
    var tel = req.body.tel
    contatos.salvar(noem, email, tel)
})

module.exports = router