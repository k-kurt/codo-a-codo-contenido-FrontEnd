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


const createMovie=(req, res)=>{
    const {title,director,year}=req.body
    const sql='INSERT INTO movies (title,director,year) VALUES (?,?,?)'
    db.query(sql,[title,director,year],(err,results)=>{
        if(err) throw err
        res.json({message:'Pelicula agregada correctamente', movieID: results.insertId})
    })
}


const updateMovie=(req,res)=>{
    const {id}=req.params
    const {title, director,year}=req.body
    const sql='UPDATE movies SET title=?, director=?, year=? WHERE id=?'

    db.query(sql, [title,director,year,id], (err, results)=>{
        if(err) throw err
        res.json({message: 'Pelicula actualizada'})
    }) 

}


const deleteMovie = (req,res)=>{
    const {id}=req.params
    const sql='DELETE FROM movies WHERE id=?'
    db.query(sql,[id],(err, results)=>{
        if(err) throw err
        res.json({message: 'Pelicula eliminada'})
    })
}


module.exports={
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie

}