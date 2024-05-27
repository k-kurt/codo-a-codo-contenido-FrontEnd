

//OBJETOS

// var computadora=new Object()

// computadora.marca="hp"
// computadora.ram=12
// computadora.procesador="intel core i7"
// computadora.teclado="ingles"
// computadora.disco="500gb ssd"


// console.log(computadora.marca)
// console.log(`Me compre una computadora marca ${computadora.marca} con una memoria ram de ${computadora.ram }`)



//FUNCIONES ADENTRO DE LOS OBJETOS, CONOCIDAS COMO METODOS

var netbook={
    marca:"dell",
    color:"gris",
    pantalla:"14'",
    se_tilda: true,
    accion: function(){
        return `${this.marca} instalo cualquier driver`
    },
    reiniciar: function(){
        if(this.se_tilda){
            console.log("forzar reinicio")
        }else(
            console.log("funciona")
        )
    },
    brillo: () =>{
        console.log("brillo al maximo")
    }
}

// console.log(netbook.accion())

// console.log(netbook.reiniciar())


//REESCRIBIR ATRIBUTO

// netbook['color']='blanco';
// console.log(netbook.color);
// console.log(netbook.color='amarillo')
// console.log(netbook.color)
// netbook.color='violeta';
// console.log(netbook.color)
// console.log(netbook.brillo)// no funciona


// var perro = {
//     nombre: "Milo",
//     edad: 12,
//     vivo: true,
//     quienSoy() {return "Soy " + this.nombre},       //son funciones abreviadas
//     ladrar() {return this.nombre + " dice guau!"}   //son funciones abreviadas
// }
// console.log(perro.nombre,"tiene",perro.edad,"años")
// console.log(perro.quienSoy())
// if (perro.vivo) {
//     console.log(perro.ladrar())
// }



//CLASE EN JS

class perro{
    constructor(edad,nombre,raza,accion){
        this.edad=edad;
        this.nombre=nombre;
        this.raza=raza;
        this.accion=accion;
    }
}

//instancia de 2 objetos perro
var perro1=new perro(12,"sofi", "cruza caniche", true);
var perro2=new perro(5,"kino","criollo",true);

//modificamos alguna de sus propiedades 
perro1.nombre="tony";
perro2.edad=10;



//FUNCION CONSTRUCTORA 
//crea la clase y el contructor en la misma estructura 


function Perro2(nombre, edad, raza){
    this.nombre=nombre,
    this.edad=edad,
    this.raza=raza;
}

let perro3=new Perro2("titi",10,"caniche")


console.log(perro3)


//STRING | PROPIEDADES Y METODOS

// .length
// Devuelve el número de caracteres de la variable de tipo string en cuestión

// .charAt(pos)
// Devuelve el carácter en la posición pos de la variable.
//  .concat(str1, str2...)
// Devuelve el texto de la variable unido a str1, a str2...
//  .indexOf(str)
// Devuelve la primera posición del texto str.
//  .indexOf(str, from)
// Idem al anterior, partiendo desde la posición from.
//  .lastIndexOf(str, from)
// Idem al anterior, pero devuelve la última posición.



//METODO RADOM()

/* // Obtenemos un número al azar entre [0, 1) con 16 decimales
let x = Math.random();
Multiplicamos x por el valor máximo que buscamos (5)
x = x * 5;
Redondeamos hacia abajo, obtenemos un entero
x = Math.floor(x); */



//Objeto Math | Métodos de redondeo

/* 
Math.round(x) devuelve el redondeo de x(el entero mas cercano)
Math.ceil(x) devuelve el redondeo superior de x(el entero mas alto)
Math.floor(x) Devuelve el redondeo inferior de x(el entero mas bajo)
Math.fround(x) devuelve el redondeo de x(flotante con precision simple)
Math.trunc(x) trunca el numero x (devuelve solo la parte entera)
*/