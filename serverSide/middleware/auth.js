const config = require('config');
const jwt = require('jsonwebtoken');

const noAuthTitle = "Autorizimi gabim";
const noAuthBody = "Autorizimi nuk u krye me sukses. Mungon token-i unik.";


//the aim of a middleware is to get request, do whatever,
//return a response and then go next
function auth(request, response, next){
    const token = request.header("x-auth-token");

    //check for token

    if( !token ) return response.status(401).json({title: noAuthTitle, body: noAuthBody});

    try{
        //Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //Add user from payload
        request.user = decoded;
        next();
    }
    catch(e){
        response.status(400).json({msg: "Token is not valid."});
    }

}

module.exports = auth;