const express = require('express')
const router = express.Router()

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