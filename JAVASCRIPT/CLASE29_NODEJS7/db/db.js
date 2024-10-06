//aqui va a estar alojada nuestra conexion a la base de datos


const mysql=require('mysql2')

const connection=mysql.createConnection({
    //cuando levantamos la bbdd con xampp la contrasenia es vacia
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies_db'
})

connection.connect((err)=>{
    if(err){
        console.log('Error en la base de datos', err)
    return
    }
    console.log('Conectado a la base de datos')
})


module.exports=connection