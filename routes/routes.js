const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser').urlencoded({extended:false})
const verifyToken = require('../middleware/middleware')
// rota que retorna a tela de listar
router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})

router.get('/listar_contatos', verifyToken, (req, res)=>{
    console.log('oi')
    res.send({teste:'oi'})
})


router.post('/login', bodyParser,(req, res)=>{

    if (req.body.user === 'Vinicius' && req.body.pass === '123456') {
        const id = 4
        const token = jwt.sign({id}, process.env.SECRET,{
            expiresIn: 5000
        })
        res.cookie('x-access-token', token)
        res.redirect('/contatos')
    }else{
        res.status(403).json({msg:'login inválido'})
    }
})

router.get('/', (req, res)=>{
    res.send('home')
})

router.get('/', (req, res)=>{
    res.send('get')
    console.log('SFGSDGDS')
})

router.post('/', (req, res)=>{
    res.send('post')
})

router.delete('/', (req, res)=>{
    res.send('delete')
})

module.exports = router