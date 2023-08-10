/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Magali",
        imagen: "./imagenes/magali.png",
        url: "https://magasegu.github.io/comentarios/",
    },
    {
        id: 2,
        nombre: "Joaquin",
        imagen: "./imagenes/joaquin.png",
        url: "https://gaticabonnet.github.io/comentario-/",
    },
    {
        id: 3,
        nombre: "Santino",
        imagen: "./imagenes/santino.png",
        url:"https://crismael2010.github.io/Comentarios-2-/"
    },
    
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
        <article class="card">
            <img src=${carta.imagen} alt="Imagen del proyecto">
            <div class="info">
                <h2>${carta.nombre}</h2>
                <a href=${carta.url}>Visita el sitio</p>
            </div>
        </article>`
)



