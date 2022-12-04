function carregar_contatos(){
    cookie = document.cookie
    console.log('oi')
    token = cookie.split('; ').find((row) => row.startsWith('x-access-token='))?.split('=')[1]
    html = ''
    $.ajax({
        url: '/listar_contatos',
        method: 'GET',
        datatype: 'json',
        cookie:{
            'x-access-token': token,
        },
        
        success: function(resposta){
            resposta.forEach(contato => {
                html += "<tr id = '"+contato.id_contato+"'><td>"+contato.nome+"</td><td>"+contato.telefone+"</td><td>"+contato.email+"</td><td>...</td><td>...</td></tr>"
            });
            $('#table_listar').html(html)
        },

        error: function(){
            alert('Algo de errado aconteceu, tente novamente mais tarde')
        }
    
    })
}
