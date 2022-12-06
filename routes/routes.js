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

// Contatos
router.get('/novo_contato', verifyToken, (req, res) =>{
    res.render('cadastro.html')
})

router.post('/salvar_contato', verifyToken, (req,res) =>{
    contatos_controller.salvar_contato(req, res)
})

router.get('/contatos', verifyToken, (req, res) =>{
    res.render('listar.html', {message: req.flash('message')})
})

router.get('/listar_contatos', verifyToken, (req, res) => {
    res.send(contatos_controller.buscar_contatos(req, res))
})

router.get('/editar', verifyToken, (req, res) => {
    result = contatos_controller.buscar_contato_unico(req, res)[0]
    res.render('edit.html', {id:result.id_contato, nome:result.nome, email:result.email, telefone:result.telefone})
})

router.post('/editar_contato', verifyToken, (req, res) => {
    contatos_controller.editar_contato(req, res)
    req.flash('message', 'Atualizado com Sucesso')
    res.redirect('contatos')
})

router.get('/excluir_contato', verifyToken, (req, res) => {
    contatos_controller.excluir_contato(req, res)
})






// redireciona todas as rotas não existentes para a página de página não encontrada
router.get('*', (req, res) => {
    res.render('error/error_404.html')
})

module.exports = router