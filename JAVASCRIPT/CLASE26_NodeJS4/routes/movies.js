const express=require('express')
const router=express.Router()


let peliculas=[
    {id:1, title: "El secreto de sus ojos", director: "Juan Jose Campanella", year: 2009},
    {id:2, title: "Relatos salvajes", director: "Damian Szifron", year: 2014},
    {id:3, title: "La historia oficial", director: "Luis Puenzo", year: 2001}
]


router.get('/', (req, res)=>{
    res.json(peliculas)
})


router.get('/:id', (req,res)=>{
    const movie=peliculas.find(m=>m.id===parseInt(req.params.id))
    if(!movie)return res.status(404).send('Movie not found')
        res.json(movie)
})


router.post('/', (req, res)=>{
    const newMovie={
        id: peliculas.length + 1,
        title: req.body.title,
        director: req.body.director,
        year: req.body.year
    }
    peliculas.push(newMovie)
    res.status(201).json(newMovie)
})


//modificar un registro
router.put('/:id', (req, res)=>{
    const movie=peliculas.find(m=>m.id===parseInt(req.params.id))
    if(!movie)return res.status(404).send('Movie not found')

    movie.title=req.body.title || movie.title
    movie.director=req.body.director || movie.director
    movie.year = req.body.year || movie.year

    res.json(movie)
})



router.delete('/:id', (req, res)=>{
    const movieIndex=peliculas.findIndex(m=> m.id=== parseInt(req.params.id))
    if(movieIndex==-1) return res.status(404).send('Movie not found')

        const deleteMovie=peliculas.splice(movieIndex,1)
        res.json(deleteMovie)
})


module.exports=router