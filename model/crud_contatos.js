var connection = require('./con_bd')

function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO Contatos(nome, email, telefone) VALUES (?, ?, ?)", [nome, email, tel])
        window.alert('Contato Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar contato:' + error)
    }
}
// module.exports = salvar;

function editar(nome, email, tel, id_contato) {
    try {
        connection.query("UPDATE Contatos SET nome = ?, email = ?, telefone = ? where id_contato = ?", 
        [nome, email, tel, id_contato])
    } catch (e) {
        res.send()
    }
}
module.exports = editar;

function listar() {
    try {
        connection.query("SELECT id_contato, nome, telefone, email FROM Contatos")
    } catch (error) {
        window.alert('Erro ao buscar contatos:' + error)
    }
}

// module.exports = listar;