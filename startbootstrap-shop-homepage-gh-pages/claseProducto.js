
// Declaración de la clase

class Productos 
{
    constructor(nombreProducto,precioProducto,descripcionProducto)
    {
        this.nombreProducto = nombreProducto;
        this.precioProducto = precioProducto;
        this.descripcionProducto = descripcionProducto;
        this.cantidadProducto = 0;

        
    }

}


class Carrito
{

    constructor(productos)
    {
        this.productos = productos
    }

}
class Venta
{
    constructor(Carrito)
    {
        this.Carrito = Carrito;
    }
}



// declaracion de variables
let camisetaBonita = new Productos("camiseta",24.99,"es super chula")
let putoLujo = new Productos("Pu** de lujo",-20,"super bien");
let yonubca = new Productos("Juego de beber",10.99,"emocionante juego")
let ordenador = new Productos("Ordenador", 204.99,"la hostia")
let sandaliasYisus = new Productos("Sandalias de Jesucristo",64.99,"molan")
let gorraFricky = new Productos("Gorra Fricky",74.99,"bastante fricky")
let productitos = new Carrito(camisetaBonita,putoLujo,yonubca,ordenador,sandaliasYisus,gorraFricky)
let venta = new Venta(productitos)

// function añadirProducto()
// {
//     let nombre = document.getElementById("exampleNombreProducto").value
//     let precio = document.getElementById("examplePrecio").value
//     let descripcion = document.getElementById("exampleDescription").value

//     productitos.push(new Productos(nombre,precio,descripcion))
// }


// Declaracion de metodos
console.log (productitos[0])

function anadirAlCarrito(id)
{
    productitos[id].productos.cantidadProducto+1
    console.log(productitos[0].productos[0].nombreProducto)

}
function verCarrito()
{

    let imprrso;
    for(let i=0;i<productitos.productos.length;i++)
    {
     if(productitos.productos[i].cantidadProducto>=1)
     {
        console.log("* Producto: " + productitos.productos[i].nombreProducto + "* Cantidad = " + productitos.productos[i].cantidadProducto)

    }
    

}

    // for(let i=0;i<suCompra.length;i++)
    
    




}