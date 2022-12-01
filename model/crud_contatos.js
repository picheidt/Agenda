var connection = require('./con_bd')

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

module.exports.salvar = salvar
module.exports.editar = editar
module.exports.listar = listar
