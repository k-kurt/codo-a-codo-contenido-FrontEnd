 const express = require('express')
 const authController=require('../controllers/authController')
 const authMiddleware= require('../middlewars/authMiddleware')


 const router=express.Router()

 router.post('/register', authController.register)//primero tendremos que registrarnos 
 router.post('/login', authController.login)//luego tendremos que loguearnos

 router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).send(`Que onda ${req.userId}`)//si esta todo bien, nos abre la ruta protegida
 })

 module.exports=router