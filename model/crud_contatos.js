const connection = require('./con_bd')
const deasync = require('deasync')

function salvar(nome, email, tel, id_usuario) {
    conn = connection()
    try {
        conn.query("INSERT INTO Contatos(nome, email, telefone, id_usuario) VALUES (?, ?, ?, ?)", [nome, email, tel, id_usuario])
        // conn.end()
    } catch (error) {
        // conn.end()
        return false
    }
}

function listar(id) {
    conn = connection()
    contatos = null
    try {
        conn.query("SELECT id_contato, nome, telefone, email FROM contatos WHERE id_usuario = ?", [id], function(err, result){
            if (err) {
                contatos = false                
            }else{
                contatos = result
            }
        })
        while ((contatos == null)) {
            deasync.runLoopOnce()
        }
        // conn.end()
        return contatos
    } catch (error) {
        // conn.end()
        return false        
    }
}

function editar(id, nome, email, tel, id_contato) {
    conn = connection()
    try {
        conn.query("UPDATE Contatos SET nome = ?, email = ?, telefone = ? where id_contato = ? and id_usuario = ?", [nome, email, tel, id_contato, id])
        // conn.end()
    } catch (error) {
        // conn.end()
        return false
    }
}

function excluir(id_contato, id_usuario){
    conn = connection()
    try{
        conn.query("DELETE FROM contatos WHERE id_contato = ? AND id_usuario = ?;", [id_contato, id_usuario]);
        // conn.end()
    } catch (error){
        // conn.end()
        return false
    }
}

function buscar_especifico(id_contato, id_usuario){
    conn = connection()
    contatos = null
    try {
        conn.query("SELECT id_contato, nome, telefone, email FROM contatos WHERE id_usuario = ? AND id_contato = ?", [id_usuario, id_contato], function(err, result){
            if (err) {
                contatos = false                
            }else{
                contatos = result
            }
        })
        while ((contatos == null)) {
            deasync.runLoopOnce()
        }
        // conn.end()
        return contatos
    } catch (error) {
        // conn.end()
        return false        
    }
}

module.exports.salvar = salvar
module.exports.editar = editar
module.exports.listar = listar
module.exports.excluir = excluir
module.exports.buscar_especifico = buscar_especifico