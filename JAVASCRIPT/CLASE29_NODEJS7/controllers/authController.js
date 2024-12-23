//Registro de usuario (register) :Recibe los datos del usuario, cifra la contraseña, almacena el usuario en el array de usuarios, genera un token JWT y lo envía como respuesta.
//Inicio de Sesión (login): Verifica las credenciales del usuario, genera un token JWT si las credenciales son correctas y lo envía como respuesta.

const jwt=require('jsonwebtoken')//armar los tokens
const bcrypt=require('bcryptjs')//hashear las contrasenias
const users=require('../models/userModel')//para los usuarios
const config=require('../config/config')//para la secret key y la duracion del token

exports.register=(req,res)=>{
    const {username, password}=req.body

    const hashedPassword=bcrypt.hashSync(password, 8)

    const newUser = {id: users.length + 1, username, password: hashedPassword}

    users.push(newUser)

    const token=jwt.sign({id: newUser.id},
        config.secretKey, {expiresIn: config.tokenExpiresIn}
    )

    res.status(201).send({auth: true, token})
}

//buscando el ususario
exports.login = (req, res)=>{
    const {username, password}=req.body//desde postman

    const user=users.find(u=>u.username === username)//buscando en el array con find

    if(!user) return res.status(404).send('User not found')//no encontrado

    const passwordIsValid=bcrypt.compareSync(password,user.password)//comparamos el password que tenemos

    if(!passwordIsValid) return res.status(404).send({auth: false, token: null})//si no es valido, pasamos el token null

    const token= jwt.sign({id: user.id}, config.secretKey, {expiresIn: config.tokenExpiresIn})//creamos el token

    res.status(200).send({auth: true, token})//si es correcto pasamos el token


}