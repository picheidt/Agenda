require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

function create_token(id){
    console.log(id)
    const token = jwt.sign({id}, process.env.SECRET)
    return token
}

function return_id(token){
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        const id = decoded.id
    })

    return id
}

module.exports.get_id = return_id
module.exports.get_token = create_token