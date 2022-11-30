function listar_contatos(){
    cookie = document.cookie
    token = cookie.split('; ').find((row) => row.startsWith('x-access-token='))?.split('=')[1]
    $.ajax({
        url: '/listar_contatos',
        method: 'GET',
        datatype: 'json',
        cookie:{
            'x-access-token': token,
        },
        
        success: function(resposta){
            alert(resposta['teste'])
        },

        error: function(){
            alert('não foi')
        }

    })
}