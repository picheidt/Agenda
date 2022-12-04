const crud_login = require('../model/crud_login')
const token_controller = require('./token_controller')

function logar(req, res){
    const login = req.body.email
    const pass = req.body.password
    // confere se o login existe
    result = crud_login.confere_login(login, pass)
    if (result===false){
        res.render('error/error_500.html')
    }else if (result.length == 0) {
        req.flash('message', 'Login ou senha inválidos')
        res.redirect('login')
    }else{
        var id = result[0].id_usuario
        token = token_controller.get_token(id)
        res.cookie('x-access-token', token)
        res.redirect('contatos')
    }
}

module.exports.logar = logar
