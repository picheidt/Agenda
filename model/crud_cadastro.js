function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO Contatos(nome, email, telefone) VALUES (?, ?, ?)", [nome, email, tel])
        window.alert('Contato Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar contato:' + error)
    }
}