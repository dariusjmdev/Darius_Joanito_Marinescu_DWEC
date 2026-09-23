const boton = document.getElementById("boton");
const mensaje = document.getElementById("Mensaje");
const modoNoche = document.getElementById("modoNoche");

if (boton) {
    boton.addEventListener("click", function () {
        contador++;
        mensaje.textContent = "Botón pulsado " + contador + " veces";
    });
}

    modoNoche.addEventListener("click", function () {
        document.body.classList.toggle("tema-claro");
    });

//Declaracion de variables para el personaje

const nombre = "Darius";
let nivel = 1;
const vida = 100;
const esJefe = true;
const habilidades = ["Espada", "Arco", "Magia"];

//Mostrar en la consola los valores del personaje
console.log("Nombre: " + nombre);
console.log("Nivel: " + nivel);
console.log("Vida: " + vida);
console.log("Es jefe: " + esJefe);
console.log("Habilidades: " + habilidades.join(", "));

//Mostrar en la consola el tipo de dato de cada variable
console.log(typeof nombre);
console.log(typeof nivel);
console.log(typeof vida);
console.log(typeof esJefe);
console.log(typeof habilidades);
