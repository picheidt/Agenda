const conexao = require('./con_bd')
const deasync = require('deasync')
function confere_login(login, pass) {
    var result_db = null
    try {
        conn = conexao()
        conn.query('SELECT id_usuario FROM usuario WHERE login = ? AND senha = ?', [login, pass],function(err, result){
            if(err){
                result_db = false
            }else{
                result_db = result               
            }
            return result_db
        })
        
        while ((result_db==null)) {
            deasync.runLoopOnce()
        }
           
        return result_db
    } catch (error) {
        return false   
    }
}

function salvar(nome, email, tel) {
    try {
        connection.query("INSERT INTO usuario(login,senha) VALUES (?, ?)", [nome, email, tel])
        window.alert('Usuário Salvo!')
    } catch (error) {
        window.alert('Erro ao salvar Usuário:' + error)
    }
}

module.exports.confere_login = confere_login