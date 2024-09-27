//
//alert (`Bienvenido!!!`);
//let ok = confirm ("Aceptas los terminos y condiciones?");


 

//funcion para recorrer los datos de las velas.
/*function recorrerDatosVelas() {
    let respuestaVerDatos = prompt ("Desea ver las velas disponibles? Si es así, ingrese 1, de lo contrario ingrese 2")
    if (respuestaVerDatos == 1){
        for (let recorrerIDVelas of IDVelas) {
            // console.log(recorrerIDVelas.id);
             console.log(recorrerIDVelas.forma);
         }
    } if (respuestaVerDatos == 2){
        console.log("Ha elegido no ver los datos de las velas");
    } else {
        console.log("Error");
        
    }
    
}


//funcion para agregar nuevos productos.
function introduccionDatosVelas() {
    let respuesta = prompt("Desea ingresar un nuevo producto? Si la respuesta es si ingrese 1, de lo contrario ingrese 2")
    if (respuesta == 1) {
        let IDIntroVelas = prompt("Ingrese el código del producto")
        let nombreIntroVelas = prompt("Ingrese el nombre del producto")
        let colorIntroVelas = prompt("Ingrese el color del producto")

        let introDatosVelas = [
            { id: IDIntroVelas, nombre: nombreIntroVelas, color: colorIntroVelas }
        ];

        //para mostrar los datos del producto ingresado.
        console.log("Los datos ingresados son: ID: ", IDIntroVelas, " nombre: ", nombreIntroVelas, " y color: ", colorIntroVelas)
        seguirAgregandoProd();
        if (respuesta == 2){
            console.log("No se ingresarán datos de productos nuevos");
        } else {
            console.log("Error");
        
        }

}

//Para seguir agregando productos
function seguirAgregandoProd(){
    let rtaSeguirAgregando = prompt("Desea seguir agregando productos nuevos? Si la respuesta es si ingrese 1, de lo contrario ingrese 2.")
    if (rtaSeguirAgregando == 1) {
        let nuevoProducto;
        nuevoProducto = IDIntroVelas;
        IDIntroVelas.push(nuevoProducto)
        nuevoProducto = nombreIntroVelas;
        nombreIntroVelas.push (nuevoProducto)
        nuevoProducto = colorIntroVelas;
        colorIntroVelas.push(nuevoProducto)
        console.log("Los nuevos productos agregados son: ", IDIntroVelas, " ", nombreIntroVelas, " ", colorIntroVelas);
        
    } 
    if (rtaSeguirAgregando == 2){
        console.log("Cierre del sistema...")
    }
        
    }
} 


//llamado de las funciones
recorrerDatosVelas();
introduccionDatosVelas();
seguirAgregandoProd();


//uso del DOM
let elemento1 = document.getElementsByClassName("negrita")
console.log(negrita[0].inner.html);
console.log(negrita[1].inner.html);
console.log(negrita[2].inner.html);

let recorrerMain = document.getElementsByTagName("main")
//let recorrerDiv = document.getElementsByTagName("div")

for (const div of recorrerMain){
console.log(div.innerHTML)
}

*/