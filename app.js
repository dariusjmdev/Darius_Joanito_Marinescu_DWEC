console.log("¡Hola DWEC! Mi taller ya funciona.");
let contador = 0;
const boton = document.getElementById("boton");
const mensaje = document.getElementById("Mensaje");
boton.addEventListener("click", function(){
    contador++;
    mensaje.textContent = "Botón pulsado " + contador + " veces " ;
});
