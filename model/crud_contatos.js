var connection = require('./con_bd')

function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO Contatos(nome, email, telefone) VALUES (?, ?, ?)", [nome, email, tel])
        window.alert('Contato Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar contato:' + error)
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

function listar() {
    try {
        connection.query("SELECT id_contato, nome, telefone, email FROM Contatos")
    } catch (error) {
        window.alert('Erro ao buscar contatos:' + error)
    }
}

/*
function excluir(id_contato, id_usuario){
    try{
        connection.query("DELETE FROM ")
    }
}
*/
module.exports = [listar, editar, salvar]