//este archivo contiene la configuracion necesaria para manejar los tokens JWT en la aplicacion. Incluye la clave secreta utilizada para firmar los tokens y la duracion de validez de los tokens.
//secretKey: Es una cadena de texto que se usa para firmar y verificar los tokens JWT ESTA CLAVE DEBE SER UNICA Y SECRETA. En un entorno de produccion, es importante mantener esta clave segura y no compartida publicamente
//La clave se usa luego en la funcion jwt.sign() para crear el token y en jwt.verify() para verificar la validez del token
//tokenExpiresin: especifica cuanto tiempo es valido el token antes de expirar. Se puede utilizar 1h, 2h, 30m, etc.

module.exports={
    secretKey: '12345',
    tokenExpiresIn: '1h'
}