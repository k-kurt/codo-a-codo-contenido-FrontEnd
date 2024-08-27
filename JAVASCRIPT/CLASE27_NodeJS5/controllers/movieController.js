//Este va a ser el controller donde vamos a manejar todo


const db=require('../db/db.js')//sale, entra a la carpeta db y usa el archivo db donde va a estar la conexion a la bbdd


const getAllMovies=(req, res) =>{
    const sql= 'SELECT  * FROM movies'
    db.query(sql, (err, results) =>{
        if(err) throw err
        res.json(results)
    })

}

//mostrar el registro por el id, pasado el id como parametro en el url
const getMovieById=(req, res) =>{
    const {id}=req.params
    const sql='SELECT * FROM movies WHERE id=?'
    
    db.query(sql, [id], (err,results)=>{//en este caso pasamos en el query el parametro de id
        if(err) throw err
        res.json(results)
    })
}


module.exports={
    getAllMovies,
    getMovieById

}