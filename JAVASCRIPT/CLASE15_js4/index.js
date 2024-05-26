

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