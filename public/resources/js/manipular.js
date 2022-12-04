function listar_contatos(contatos) {
    contatos_list = contatos.split(';')
    var lista = document.getElementById('table_listar')
    contatos_list.forEach(contato => {
        if (contato != '') {
            contato = JSON.parse(contato)
            lista.innerHTML += "<tr id = '"+contato.id+"'><td>"+contato.nome+"</td><td>"+contato.telefone+"</td><td>"+contato.email+"</td><td>...</td><td>...</td></tr>"
        }

    });
}