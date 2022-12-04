const conexao = require('./con_bd');
const controller_token = require('../controller/token_controller')

function logar(req, res) {
    const conn = conexao()
    const login = req.body.email
    const pass = req.body.password
    try {
        conn.query('SELECT id_usuario FROM usuario WHERE login = ? AND senha = ?', [login, pass],function(err, result){
            if(err){
               res.render('error/error_500.html')
            }else{
                if (result.length>0) {
                    const token = controller_token.get_token(result[0]['id_usuario'])
                    res.cookie('x-access-token', token)
                    res.redirect('contatos')
                }else{
                    req.flash('message', 'Login ou senha inválidos')
                    res.redirect('login')
                }
            }
        })    
    } catch (error) {
        res.render('error/error_500.html')   
    }
}

module.exports.confere_login = logar
