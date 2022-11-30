const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/middleware')

// rota que retorna a tela de listar

router.get('/login', (req, res) => {
    
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
    editar(nome, email, fone);
})


module.exports = router