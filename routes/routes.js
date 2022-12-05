const express = require('express')
const router = express.Router()
const usuario_controller = require('../controller/usuario_controller')
const contatos_controller = require('../controller/contatos_controller')
const token_controller = require('../controller/token_controller')
const verifyToken = token_controller.verify_token

//Login

router.get('/', (req, res) => {
    res.redirect('/login')
})

router.get('/login', (req, res)=>{
    res.render('login.html', {message: req.flash('message')})
})

router.post('/logar', (req, res) => {
    usuario_controller.logar(req, res)
})

router.get('/logout', verifyToken, (req, res) => {
    token_controller.invalidate_token(req, res)
})

//Cadastro 

router.get('/cadastro', (req, res) =>{
    res.render('cadastro.html')
})

router.post('/salvar_contato', (req,res) =>{
    res.render(contatos_controller.salvar_contato(req, res))
})

// Contatos

router.get('/contatos', verifyToken, (req, res) =>{
    res.render('listar.html')
})

router.get('/listar_contatos', verifyToken, (req, res) => {
    res.send(contatos_controller.buscar_contatos(req, res))
})

router.post('/editar_contato', verifyToken, (req, res) => {
    res.render(contatos_controller.editar_contato(req, res))
})

router.post('/excluir_contato', verifyToken, (req_res) => {
    var id_contato = req.body.id_contato
    var id_usuario = req.body.id_usuario
    contatos_controller.excluir_contato(id_contato, id_usuario)
})

// redireciona todas as rotas não existentes para a página de página não encontrada
router.get('*', (req, res) => {
    res.render('error/error_404.html')
})

module.exports = router