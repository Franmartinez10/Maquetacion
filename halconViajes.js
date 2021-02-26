let arrayJsons = [];
function recogerDatos()
{
    let desde = document.getElementById("desdeForm").value
    let hacia = document.getElementById("haciaForm").value
    let fechas = document.getElementById("fechasForm").value
    let nPasajeros = document.getElementById("pasajerosForm").value

    let crearJson = {

                        "desde":desde,
                        "hacia":hacia,
                        "fechas":fechas,
                        "nPasajeros":nPasajeros

                    }
    arrayJsons.push(crearJson)
    console.log(crearJson)
    console.log(arrayJsons)

} 
function tieneR()
{   let ciudadesconR =[];
    for(let i=0;i<arrayJsons.length;i++)
    {
        if(arrayJsons[i].desde.toLowerCase().includes("r")) 
        {
            ciudadesconR.push(arrayJsons[i].desde)
            document.getElementById("mensaje").innerHTML = "Las ciudades desde la que puede viajar que llevan r son: " + ciudadesconR
        }
    }
}
function cerrar()
{
    let botonBanner = document.getElementById("banner")
    botonBanner.classList.toggle("desaparecer")
}