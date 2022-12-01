conexao = require('./con_bd');


function logar(email, senha) {
    x = conexao.query("SELECT id_usuario FROM Usuario WHERE login = ? and senha = ?",
    [email, senha]);
    console.log(x);
}

module.exports = logar;
