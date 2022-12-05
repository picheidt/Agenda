const crud_usuario = require('../model/crud_usuario')
const token_controller = require('./token_controller')

function logar(req, res){
    const login = req.body.email
    const pass = req.body.password
    // confere se o login existe
    result = crud_usuario.confere_login(login, pass)
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

function cadastrar_usuario(req, res){
    const login = req.body.email
    const pass = req.body.password
    // confere se o login existe
    confere = crud_usuario.confere_login(login, pass)
    result = crud_usuario.salvar_usuario(login, pass)
    if (confere===false){
        res.render('error/error_500.html')
    }else if (confere.length == 0) {
        req.flash('message', 'Login ou senha inválidos')
        res.redirect('login')
    }else{
        var id = result[0].id_usuario
        token = token_controller.get_token(id)
        res.cookie('x-access-token', token)
        res.redirect('contatos')
    }
}

module.exports.cadastrar_usuario = cadastrar_usuario
