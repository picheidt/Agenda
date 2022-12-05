require("dotenv-safe").config();
const token_controller = require('./token_controller')
const crud_contatos = require('../model/crud_contatos')

function buscar_contatos(req, res) {
    token = req.cookies['x-access-token']
    var id = token_controller.get_id(token)
    result = crud_contatos.listar(id)
    if (result==false){
        res.render('error/error_500.html')
    }else{
        return result
    }
}

module.exports.buscar_contatos = buscar_contatos

function editar_contato(req, res) {
    
    token = req.cookies['x-access-token']
    var id = token_controller.get_id(token)

    var id_contato = req.body.id_contato
    var nome = req.body.nome
    var email = req.body.email
    var tel = req.body.fone

    result = crud_contatos.editar(id, nome, email, tel, id_contato)

    if (result==false){
        res.render('error/error_500.html')
    }else{
        return result
    }
}

function excluir_contato(req_res){
    token = req.cookies['x-access-token']
    var id = token_controller.get_id(token)
    result = crud_contatos.excluir(id_contato, id_usuario)
    if(result == false){
        res.render("error/error_500.html")
    } else {
        return result
    }
}

function salvar_contato(req, res) {
    
    token = req.cookies['x-access-token']
    var id = token_controller.get_id(token)

    var nome = req.body.nome
    var email = req.body.email
    var tel = req.body.fone

    result = crud_contatos.salvar(id, nome, email, tel, id_contato)

    if (result==false){
        res.render('error/error_500.html')
    }else{
        return result
    }
}

module.exports.salvar_contato = salvar_contato
module.exports.editar_contato = editar_contato
module.exports.excluir_contato = excluir_contato