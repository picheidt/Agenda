function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO usuario(login,senha) VALUES (?, ?)", [nome, email, tel])
        window.alert('Usuário Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar Usuário:' + error)
    }
}
