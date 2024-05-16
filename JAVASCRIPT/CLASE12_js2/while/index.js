let usuario = "usuario"
let clave = "clave"

var usuarioIng = ""
var claveIng = ""

while((usuario != usuarioIng) || (clave != claveIng)){

    alert("Usuario o clave incorrecta")
    usuarioIng = prompt("Ingrese el usuario")
    claveIng = prompt("Ingrese el clave")
}

alert("Bienvenido, " + usuario)