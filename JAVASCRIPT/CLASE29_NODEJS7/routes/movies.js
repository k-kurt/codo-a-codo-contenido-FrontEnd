//aqui vamos a tener las peliculas
//hay que modificar el package para que ejecute desde src/servers.js por el cambio de ubicacion

/* vamos a llamar al controlador, que es donde vamos a hacer las consultas y aqui vamos a llamar a esas consultas a traves de las funciones */
const express=require('express')
const router=express.Router()
const movieController=require('../controllers/movieController')


router.get('/', movieController.getAllMovies)
router.get('/:id', movieController.getMovieById)
router.post('/', movieController.createMovie)
router.put('/:id', movieController.updateMovie)
router.delete('/:id', movieController.deleteMovie)


module.exports=router