const conexao = require('./con_bd')
const deasync = require('deasync')
function confere_login(login, pass) {
    var result_db = null
    try {
        conn = conexao()
        conn.query('SELECT id_usuario FROM usuario WHERE login = ? AND senha = ?', [login, pass], function (err, result) {
            if (err) {
                conn.end
                result_db = false
            } else {
                result_db = result
            }
            return result_db
        })

        while ((result_db == null)) {
            deasync.runLoopOnce()
        }
        conn.end()
        return result_db
    } catch (error) {
        conn.end()
        return false
    }
}

function confere_cadastro(login) {
    var result_db = null
    try {
        conn = conexao()
        conn.query('SELECT id_usuario FROM usuario WHERE login = ?', [login], function (err, result) {
            if (err) {
                result_db = false
            } else {
                result_db = result
            }
            return result_db
        })

        while ((result_db == null)) {
            deasync.runLoopOnce()
        }
        conn.end()
        return result_db
    } catch (error) {
        conn.end()
        return false
    }
}

function salvar_usuario(login, pass) {
    try {
        conn = conexao()
        conn.query("INSERT INTO usuario(login,senha) VALUES (?, ?)", [login, pass])
        conn.end()
    } catch (error) {
        conn.end()
        return false
    }
}

module.exports.confere_login = confere_login
module.exports.confere_cadastro = confere_cadastro
module.exports.salvar_usuario = salvar_usuario