require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const conexao = require('../model/con_bd')

function buscar_contatos(req, res) {
    const token = req.cookies['x-access-token']
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        const id = decoded.id
        conn = conexao()
        try {
            conn.query('SELECT id_contato, nome, email, telefone FROM contatos WHERE id_usuario = ? ', [id], function (err, result) {
                if (err) {
                    res.render('error/error_500.html')
                }else{
                    let contatos_str = ''
                    result.forEach(contato => {
                        contatos_str += '{"id":"'+contato.id_contato+'","nome":"'+contato.nome+'","email":"'+contato.email+'","telefone":"'+contato.telefone+'"};'
                    });
                    res.cookie('contatos', contatos_str)
                    res.render('listar.html', {contatos: contatos_str})
                }
            })
        } catch (error) {
            console.log(error)
            res.render('error/error_500.html')
        }
    })
}

module.exports.listar_contatos = buscar_contatos