//aqui vamos a tener las peliculas
//hay que modificar el package para que ejecute desde src/servers.js por el cambio de ubicacion

/* vamos a llamar al controlador, que es donde vamos a hacer las consultas y aqui vamos a llamar a esas consultas a traves de las funciones */
const express=require('express')
const router=express.Router()
const movieController=require('../controllers/movieController')//aqui llamos al archivo que tendra las funciones para traer y modificar las pelis


//vamos a usar la funcion del controller para traer todas las pelis
router.get('/', movieController.getAllMovies)//tiene que ser el mismo nombre de la funcion 
router.get('/:id', movieController.getMovieById)
// router.post('/', movieController.createMovie)
// router.put('/:id', movieController.updateMovie)
// router.delete('/:id', movieController.deleteMovie)


module.exports=router