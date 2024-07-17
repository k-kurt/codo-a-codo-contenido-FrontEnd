const express=require('express')
const router=express.Router()


let peliculas=[
    {id:1, title: "El secreto de sus ojos", director: "Juan Jose Campanella", year: 2009},
    {id:2, title: "Relatos salvajes", director: "Damian Szifron", year: 2014},
    {id:3, title: "La historia oficial", director: "Luis Puenzo", year: 2001}
]



//PARA VER LOS METODOS DE COMO MANEJAR LOS ARRAY COMO LO HICIMOS AQUI, ESTA EN LA CLASE 17. JS 5

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


//EXPLIACION
/* El objeto `router` se exporta en este código de JavaScript para modularizar las rutas de la aplicación Express. Este enfoque permite organizar mejor el código, manteniendo las rutas relacionadas en módulos separados, lo cual mejora la mantenibilidad y la legibilidad del código. 

Aquí se explica paso a paso el propósito y funcionamiento del código:

1. **Importación de módulos**:
   ```javascript
   const express = require('express');
   ```
   Se importa el módulo `express`, que es un marco de aplicaciones web para Node.js.

2. **Creación del enrutador**:
   ```javascript
   const router = express.Router();
   ```
   Se crea una instancia de `express.Router()`, que es un objeto enrutador que se puede usar para definir rutas.

3. **Definición de un arreglo de películas**:
   ```javascript
   let peliculas = [
       {id: 1, title: "El secreto de sus ojos", director: "Juan Jose Campanella", year: 2009},
       {id: 2, title: "Relatos salvajes", director: "Damian Szifron", year: 2014},
       {id: 3, title: "La historia oficial", director: "Luis Puenzo", year: 2001}
   ];
   ```
   Se define un arreglo de objetos que representan películas con sus atributos.

4. **Definición de rutas**:
   - **Obtener todas las películas**:
     ```javascript
     router.get('/', (req, res) => {
         res.json(peliculas);
     });
     ```
     Define una ruta GET para obtener todas las películas.

   - **Obtener una película por ID**:
     ```javascript
     router.get('/:id', (req, res) => {
         const movie = peliculas.find(m => m.id === parseInt(req.params.id));
         if (!movie) return res.status(404).send('Movie not found');
         res.json(movie);
     });
     ```
     Define una ruta GET para obtener una película específica por su ID.

   - **Agregar una nueva película**:
     ```javascript
     router.post('/', (req, res) => {
         const newMovie = {
             id: peliculas.length + 1,
             title: req.body.title,
             director: req.body.director,
             year: req.body.year
         };
         peliculas.push(newMovie);
         res.status(201).json(newMovie);
     });
     ```
     Define una ruta POST para agregar una nueva película.

   - **Modificar una película existente**:
     ```javascript
     router.put('/:id', (req, res) => {
         const movie = peliculas.find(m => m.id === parseInt(req.params.id));
         if (!movie) return res.status(404).send('Movie not found');

         movie.title = req.body.title || movie.title;
         movie.director = req.body.director || movie.director;
         movie.year = req.body.year || movie.year;

         res.json(movie);
     });
     ```
     Define una ruta PUT para modificar una película existente.

   - **Eliminar una película**:
     ```javascript
     router.delete('/:id', (req, res) => {
         const movieIndex = peliculas.findIndex(m => m.id === parseInt(req.params.id));
         if (movieIndex === -1) return res.status(404).send('Movie not found');

         const deletedMovie = peliculas.splice(movieIndex, 1);
         res.json(deletedMovie);
     });
     ```
     Define una ruta DELETE para eliminar una película por su ID.

5. **Exportación del enrutador**:
   ```javascript
   module.exports = router;
   ```
   Se exporta el objeto `router` para que pueda ser importado y utilizado en otros módulos de la aplicación.

Al exportar el `router`, se puede importar en el archivo principal de la aplicación (por ejemplo, `app.js` o `index.js`) y montar este enrutador en una ruta específica, lo cual permite que las rutas definidas en este módulo estén disponibles en la aplicación principal. Esto podría verse así en el archivo principal:

```javascript
const express = require('express');
const app = express();
const peliculasRouter = require('./ruta/al/archivo'); // Ruta al archivo que contiene el código anterior

app.use('/peliculas', peliculasRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

En este ejemplo, todas las rutas definidas en el archivo con el enrutador se accederán con el prefijo `/peliculas`. Por ejemplo, para obtener todas las películas, la ruta sería `http://localhost:3000/peliculas`. */