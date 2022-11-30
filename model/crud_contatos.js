function editar(nome, sobrenome, email, tel, id_contato) {
    try {
        connection.query("UPDADE Contatos SET colunm = (nome, sobrenome, email, telefone) VALUES (?, ?, ?, ?)where id = (?)", 
        [nome, sobrenome, email, tel, id_contato])
        window.alert('Contato Editado!')
    } catch (error) {
        window.alert('Erro ao editar contato:' + error)
    }
}


function salvar() {
    try {
        var nome = window.document.getElementById('idnome').value
        var nome = window.document.getElementById('idsobrenome').value
        var email = window.document.getElementById('idemail').value
        var tel = windows.document.getElementById('idfone').value
        connection.query("INSERT INTO Contatos(nome, sobrenome, email, telefone) VALUES (?, ?, ?, ?)", [nome, sobrenome, email, tel])
        window.alert('Contato Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar contato:' + error)
    }
}

function listar() {
    try {
        var nome = window.document.getElementById('idnome').value
        var nome = window.document.getElementById('idsobrenome').value
        var email = window.document.getElementById('idemail').value
        var tel = windows.document.getElementById('idfone').value
        connection.query("SELECT id_contato, nome, sobrenome, telefone, email, id_usuario FROM Contatos")
    } catch (error) {
        window.alert('Erro ao buscar contatos:' + error)
    }
}