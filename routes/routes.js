const express = require('express')
const router = express.Router()
const login = require('../model/crud_login')
const contatos = require('../controller/contatos.controller')
const token_controller = require('../controller/token_controller')
const verifyToken = token_controller.verify_token


router.get('/', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res)=>{
    res.render('login.html', {message: req.flash('message')})
})

router.post('/logar', (req, res) => {
    login.confere_login(req, res)
})

router.get('/contatos', verifyToken, (req, res) =>{
    contatos.listar_contatos(req, res)
})


// rotas ainda não prontas

router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})



// adicionar o tolken depois de testar
    router.get('/editar_contato', (req, res) => {
})

router.post('/updateContato', (req, res) =>{
    // resolver como passar o id
    var id_contato = req.body.id_contato
    var nome = req.body.nome
    var email = req.body.email
    var fone = req.body.fone
    res.render('listar')
    contatos(nome, email, fone, id_contato);
})


router.get('/cadastro', (req, res) =>{
    res.render('cadastro.html')
})

router.post('/salvar_contato', (req,res) =>{
    console.log(contatos)
    var nome = req.body.nome
    var email = req.body.email
    var tel = req.body.fone
    contatos.salvar(nome, email, tel)
})

// redireciona todas as rotas não existentes para a página de página não encontrada
router.get('*', (req, res) => {
    res.render('error/error_404.html')
})
module.exports = router