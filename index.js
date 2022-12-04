require("dotenv-safe").config();
// importação do express
const express = require("express")
const app = express()
// configurações do express para usar cookies, pegar dados nos posts e mandar mensagens por requisição e 
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser').urlencoded({extended:false})
const flash = require('connect-flash')
const session = require('express-session')
// importa as rotas do outro arquivo
const rota = require('./routes/routes')
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
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(rota)