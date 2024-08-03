//Este va a ser el controller donde vamos a manejar todo


const db=require('../db/db.js')//sale, entra a la carpeta db y usa el archivo db donde va a estar la conexion a la bbdd


const getAllMovies=(req, res) =>{
    const query= 'SELECT  * FROM movies'
    

}