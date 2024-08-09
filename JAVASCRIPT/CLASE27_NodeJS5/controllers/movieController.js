//Este va a ser el controller donde vamos a manejar todo


const db=require('../db/db.js')//sale, entra a la carpeta db y usa el archivo db donde va a estar la conexion a la bbdd


const getAllMovies=(req, res) =>{
    const sql= 'SELECT  * FROM movies'
    db.query(sql, (err, results) =>{
        if(err) throw err
        res.json(results)
    })

}

module.exports={getAllMovies}