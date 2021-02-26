import {Productos} from ("./claseProducto")


function añadirProducto()
{
    let nombre = document.getElementById("exampleNombreProducto").value
    let precio = document.getElementById("examplePrecio").value
    let descripcion = document.getElementById("exampleDescription").value

   // productitos.push(new Productos(nombre,precio,descripcion))
}
let camisetaBonita = new Productos("camiseta",24.99,"es super chula")
let putoLujo = new Productos("Pu** de lujo",-20,"super bien");
let yonubca = new Productos("Juego de beber",10.99,"emocionante juego")
let ordenador = new Productos("Ordenador", 204.99,"la hostia")
let sandaliasYisus = new Productos("Sandalias de Jesucristo",64.99,"molan")
let gorraFricky = new Productos("Gorra Fricky",74.99,"bastante fricky")

let productitos = new Productos([camisetaBonita,putoLujo,yonubca,ordenador,sandaliasYisus,gorraFricky]);

