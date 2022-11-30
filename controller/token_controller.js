require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


function gerar_token(id){
    const token = jwt.sign({id}, process.env.SECRET, {expiresIn:})
    return token
}
