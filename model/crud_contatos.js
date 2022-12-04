const connection = require('./con_bd')
const deasync = require('deasync')

function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO Contatos(nome, email, telefone) VALUES (?, ?, ?)", [nome, email, tel])
        console.log('certo')
        // window.alert('Contato Salvo!')
    } catch (error) {
        console.log('errado')
        // window.alert('Erro ao salvar contato:' + error)
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

function editar(nome, email, tel, id_contato) {
    try {
        connection.query("UPDATE Contatos SET nome = ?, email = ?, telefone = ? where id_contato = ?", 
        [nome, email, tel, id_contato])
    } catch (error) {
        res.send('Erro ao editar contato' + error)
    }
}


/*
function excluir(id_contato, id_usuario){
    try{
        connection.query("DELETE FROM ")
    }
}
*/

module.exports.salvar = salvar
module.exports.editar = editar
module.exports.listar = listar
