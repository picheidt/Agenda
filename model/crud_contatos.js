const connection = require('./con_bd')
const deasync = require('deasync')

function salvar(nome, email, tel, id_usuario) {
    conn = connection()
    try {
        conn.query("INSERT INTO Contatos(nome, email, telefone, id_usuario) VALUES (?, ?, ?, ?)", [nome, email, tel, id_usuario])
    } catch (error) {
        console.log(error)
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
        return contatos
    } catch (error) {
        return false        
    }
}

function editar(id, nome, email, tel, id_contato) {
    conn = connection()
    try {
        conn.query("UPDATE Contatos SET nome = ?, email = ?, telefone = ? where id_contato = ? and id_usuario = ?", [id, nome, email, tel, id_contato],)
    } catch (error) {
        res.send('Erro ao editar contato' + error)
    }
}



function excluir(id_contato, id_usuario){
    conn = connection()
    try{
        connection.query("DELETE FROM contatos WHERE id_contato = ? AND (usuario.id_usuario = ? AND contatos.id_usuario = usuario.id_usuario);", [id_contato, id_usuario]);
    } catch (error){
        res.send("Erro ao excluir contato" + error);
    }
}


module.exports.salvar = salvar
module.exports.editar = editar
module.exports.listar = listar
module.exports.excluir = excluir
