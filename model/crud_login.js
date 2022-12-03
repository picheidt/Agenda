const conexao = require('./con_bd');
const controller_token = require('../controller/token_controller')

function logar(req, res) {
    const conn = conexao()
    const login = req.body.email
    const pass = req.body.password
    try {
        conn.query('SELECT id_usuarios FROM usuario WHERE login = ? AND senha = ?', [login, pass],function(err, result){
            if(err){
               res.render('error_500.html')
            }else{
                if (result.length>0) {
                    const token = controller_token.get_token(result[0]['id_usuarios'])
                    res.cookies('x-access-token', token)
                    res.redirect('listar_contatos')
                }else{
                    res.redirect('login?status=403')
                }
            }
        })    
    } catch (error) {
        res.render('error_500.html')   
    }
}

module.exports.confere_login = logar
