function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO Contatos(nome, email, telefone) VALUES (?, ?, ?)", [nome, email, tel])
        window.alert('Contato Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar contato:' + error)
    }
}

function editar(nome, sobrenome, email, tel) {
    try {
        connection.query("UPDADE Contatos SET colunm = (nome, email, telefone) VALUES (?, ?, ?)where id = 1", 
        [nome, email, tel])
        window.alert('Contato Editado!')
    } catch (error) {
        window.alert('Erro ao editar contato:' + error)
    }
}

function listar() {
    try {
        connection.query("SELECT id_contato, nome, telefone, email FROM Contatos")
    } catch (error) {
        window.alert('Erro ao buscar contatos:' + error)
    }
}