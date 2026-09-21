

let contador = 0;
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


const juegos = [
    {
        nombre: "The Legend of Zelda: Breath of the Wild",
        compañia: "Nintendo",
        plataforma: "Nintendo Switch",
        valoracion: 10,
        precio: 59.99,
    },
    {
        nombre: "God of War",
        compañia: "Sony Interactive Entertainment",
        plataforma: "PlayStation 4",
        valoracion: 9,
        precio: 39.99,
    },
    {
        nombre: "Red Dead Redemption 2",
        compañia: "Rockstar Games",
        plataforma: "PlayStation 4",
        valoracion: 8,
        precio: 49.99,
    },
    {
        nombre: "Super Mario Odyssey",
        compañia: "Nintendo",
        plataforma: "Nintendo Switch",
        valoracion: 10,
        precio: 59.99,
    },
];

const cuerpoTabla = document.getElementById("cuerpoTabla");



    juegos.forEach((juego) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${juego.nombre}</td>
            <td>${juego.compañia}</td>
            <td>${juego.plataforma}</td>
            <td>${juego.valoracion}</td>            
            <td>${juego.precio}</td>

        `;
        cuerpoTabla.appendChild(fila);
    });
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    juegos.push({
        nombre: document.getElementById("titulo").value,
        compañia: document.getElementById("compania").value,
        plataforma: document.getElementById("plataforma").value,
        valoracion: parseInt(document.getElementById("valoracion").value),
        precio: parseFloat(document.getElementById("precio").value),
    });
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${document.getElementById("titulo").value}</td>
        <td>${document.getElementById("compania").value}</td>
        <td>${document.getElementById("plataforma").value}</td>
        <td>${document.getElementById("valoracion").value}</td>
        <td>${document.getElementById("precio").value}</td>
    `;
    cuerpoTabla.appendChild(fila);
    formulario.reset();
});