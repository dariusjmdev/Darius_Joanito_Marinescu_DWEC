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


//Array con las tareas
const   tareas = [
    { titulo: "Planchar" },
    { titulo: "Hacer la compra" },
    { titulo: "Sacar al perro" },
    { titulo: "Hacer la cama" },
    { titulo: "Limpiar el baño" }
]

// Declarada variable de horas disponibles
let horasDisponibles = 4;

//Bucle que recorre cada elemento del array y muestra el título de cada tarea en la consola

tareas.forEach(tarea => {
    console.log(tarea.titulo);
});

//If que comrpueba el número de horas disponibles y muestra un mensaje en la consola según el resultado
if (horasDisponibles > 5) {
    console.log("Día tranquilo.");
} else if (horasDisponibles >= 3 && horasDisponibles <= 5) {
    console.log("Día normal.");
} else {
    console.log("Día estresante.");
}
console.log( 10 % 3);