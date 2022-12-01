const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser').urlencoded({extended:false})
const verifyToken = require('../middleware/middleware')



router.get('/login', bodyParser, (req, res) => {
    
})

router.get('/contatos', verifyToken, (req, res)=>{
    res.render('listar.html')
})

router.get('/', (req, res)=>{
    res.render('login.html')
})
module.exports = router