const express = require("express")
const app = express()
const rota = require('./routes/routes')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser').urlencoded({extended:false})
// isso faz as rotas conseguires exibir as telas
var engines = require('consolidate');
app.set('views', __dirname + '/public/view');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.listen(3333,  ()=>{
    console.log('servidor no ar na porta 3333')
})

// a linha de baixo faz a pasta public ser visivel pelo servidor
app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser)
app.use(rota)