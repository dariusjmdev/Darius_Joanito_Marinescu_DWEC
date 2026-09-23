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

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

const frutas = ["manzana",  "pera", "platano"];

frutas.forEach((fruta) => {
    console.log(fruta);
});

numero = 4;

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}