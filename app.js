console.log("¡Hola DWEC! Mi taller ya funciona.");
let contador = 0;
document.getElementById("boton").addEventListener("click", function(){
    contador++;
    document.getElementById("Mensaje").textContent = "Botón pulsado " + contador + " veces " ;
});
