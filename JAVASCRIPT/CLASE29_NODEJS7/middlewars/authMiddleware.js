//aca vamos a armar las autentificaciones de si se armo bien, se armo mal, si es valido o no es valido

const jwt=require('jsonwebtoken')
const config=require('../config/config')

module.exports=(req, res, next)=>{//el next es para pasar a la siguiente accion(basicamente una callback) 
    const authHeader=req.req.headers['authorization']//En postman el authorization va a ser un tipo de datos que va a ser un token, que va a necesitar que se verifique
}