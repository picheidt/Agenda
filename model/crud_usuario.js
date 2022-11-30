function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO usuario(login,senha) VALUES (?, ?)", [nome, email, tel])
        window.alert('Usuário Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar Usuário:' + error)
    }
}

function editar(nome, email, tel) {
    try {
        connection.query("UPDADE usuario SET colunm = (login,senha) VALUES (?, ?)where id = (?)", 
        [nome, email, tel])
        window.alert('Usuário Editado!')
    } catch (error) {
        window.alert('Erro ao editar Usuário:' + error)
    }
}

function listar() {
    try {
        connection.query("SELECT login, senha FROM Usuario")
    } catch (error) {
        window.alert('Erro ao buscar usuario:' + error)
    }
}