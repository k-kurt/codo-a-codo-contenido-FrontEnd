//aca vamos a armar las autentificaciones de si se armo bien, se armo mal, si es valido o no es valido

const jwt=require('jsonwebtoken')
const config=require('../config/config')

module.exports=(req, res, next)=>{//el next es para pasar a la siguiente accion(basicamente una callback) 
    const authHeader=req.headers['authorization']//En postman el authorization va a ser un tipo de datos que va a ser un token, que va a necesitar que se verifique, si esta ok, pasame a la ruta protegida

    if(!authHeader) return res.status(404).send({auth: false, message: 'No se proveyo un token'})
    
    const token=authHeader.split(' ')[1]
    
    if(!token) return res.status(404).send({auth: false, message: 'Malformed token'})

    jwt.verify(token, config.secretKey, (err, decoded) =>{
        if(err) return res.status(500).send ({auth: false, message: 'Failed to authorization token'})

        req.userId=decoded.id    

        next()

    })


}