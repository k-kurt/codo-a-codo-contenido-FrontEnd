const express=require('express')
const app=express()
const PORT=3000
const multer=require('multer')//para utilizar multer

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, 'uploads/')//el nombre tiene que ser igual a la carpeta
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
    //el null es por si falla que no suba ningun archivo, va a tirar un visible para nosotros
    
})


const upload = multer({
    storage: storage//el key es obligatorio de multer
})


app.listen(PORT, ()=>{
    console.log('Corriendo en puerto 3000')
})


// el multer nos permite guardar archivos, en este caso lo haremos desde el postman, en vez de mandar un json, pasamos un jpg y este lo guardara en una carpeta que crearemos en el proyecto o tambien lo podemos almacenar en la bbdd que tambien lo almacena en el local, en la bbdd va el directorio del archivo