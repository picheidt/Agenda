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
