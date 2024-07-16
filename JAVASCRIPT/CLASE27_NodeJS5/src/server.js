const express=require('express')
const app=express()
const PORT=3000
const moviesRouter=require('../routes/movies.js')


app.use(express.json())//va a recibir un json
app.use('/movies',moviesRouter)//es la ruta, donde nos va a esperar un array de objetos que vamos a ir pasando a esta direccion



//--------------
app.listen(PORT, ()=>{
    console.log(`Corriendo servidor en el puerto:${PORT}`)
})