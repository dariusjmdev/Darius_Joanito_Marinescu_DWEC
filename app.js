console.log("¡Hola DWEC! Mi taller ya funciona.");
let contador = 0;
const boton = document.getElementById("boton");
const mensaje = document.getElementById("Mensaje");
const modoNoche = document.getElementById("modoNoche");
boton.addEventListener("click", function(){
    contador++;
    mensaje.textContent = "Botón pulsado " + contador + " veces " ;
});
modoNoche.addEventListener("click", function(){
    document.body.classList.toggle("tema-claro");
});
