const express=require('express')
const app=express()
const PORT=3000
const multer=require('multer')//para utilizar multer
const path=require('path')


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
    storage: storage,//el key es obligatorio de 
    //VALIDACION extension de archivos, el filtro de tipo de archivo
    fileFilter: (req,file, cb)=>{
        const filetypes= /jpeg|jpg|png/ //extensiones aceptadas

        const mimetype=filetypes.test(file.mimetype)//la propiedad devuelve true o false en caso que coincida con los formatos pasados

        const extname=filetypes.test(path.extname(file.originalname).toLowerCase())
        /* 
        El código está verificando dos cosas:
        Si el tipo MIME del archivo (file.mimetype) coincide con jpeg, jpg, o png.
        Si la extensión del archivo (file.originalname) coincide con una de las extensiones permitidas. */

        if(mimetype && extname){
            return cb(null,true)//el null es evitar subir archivos en el error
        }
        cb('Error: Tipo de archivo no soportado')
    },
    limits: {fileSize: 10000000}//el tamanio max del archivo, en kb

})


//de un solo archivo a la vez
app.post('/upload', upload.single('archivo'),(req, res)=>{
    res.send('Archivo subido con exito')
})//en postman pasamos este nombre al archivo

//de varios archivos a la vez
app.post('/uploads',upload.array('archivos',10) ,(req, res)=>{
    res.send('Archivos subidos con exito')
})


app.listen(PORT, ()=>{
    console.log('Corriendo en puerto 3000')
})


// el multer nos permite guardar archivos, en este caso lo haremos desde el postman, en vez de mandar un json, pasamos un jpg y este lo guardara en una carpeta que crearemos en el proyecto o tambien lo podemos almacenar en la bbdd que tambien lo almacena en el local, en la bbdd va el directorio del archivo
//para subir el archivo en el postman, ponemos en post, body, form-data, en el key seleccionamos file y ponemos el key que habiamos codeado 