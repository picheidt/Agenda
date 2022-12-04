const conexao = require('./con_bd')
const deasync = require('deasync')

function insert_token(token){
    conn = conexao()
    conn.query('INSERT INTO token_black_list(token) values(?)', [token])
}

function read_token(token){
    conn = conexao()
    var flag = null
    conn.query("SELECT id_token FROM token_black_list WHERE token = ?", [token], function(err, result){
        if (err) {
            flag = false
        }else{
            flag = result
        }
    })

    while ((flag == null)) {
        deasync.runLoopOnce()
    }
    return flag
}

module.exports.insert_token = insert_token
module.exports.read_token = read_token