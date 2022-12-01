const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/middleware')
var contatos = require('../model/crud_contatos')
// rota que retorna a tela de listar

router.get('/login', (req, res) => {
    
})

router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})


router.get('/', (req, res)=>{
    res.render('login.html')
})

// adicionar o tolkien depois de testar
router.get('/edita', (req, res) => {
    res.render('edit.html', {id:1, nome:'?', telefone:'?', email:'?'})
})

router.post('/updateContato', (req, res) =>{
    // resolver como passar o id
    var id_contato = req.body.id_contato
    var nome = req.body.nome
    var email = req.body.email
    var fone = req.body.fone
    res.render('listar')
    console.log(contatos)
    contatos(nome, email, fone, id_contato);
})


router.get('/cadastro', verifyToken, (req, res) =>{
    res.render('cadastro.html')
})

router.post('/salvar_contato', (req,res) =>{
    var nome = req.body.nome
    var email = req.body.email
    var tel = req.body.tel
    contatos.salvar(nome, email, tel)
})

module.exports = router