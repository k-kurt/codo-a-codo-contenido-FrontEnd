/*
Tenemos que ubicarnos en la carpeta donde est el js y ahi instalar tood, luego:
En la terminal corremos el comando:
para crear la carpeta json, para incializar el proyecto
npm init -y
Instalamos Express mediante npm:
npm install express --save
El flag --save indica que debe registrar la dependencia y sus subdependencias actualizadas.
A continuación, vemos en el package.json que contamos con una lista de dependencias con express en la versión que acaba de instalar
 */

//llamamos a express
const express=require('express')
//vamos a crear una variable donde esten englobadas todas las funciones de express, llama a los metodos de express
const app=express()
