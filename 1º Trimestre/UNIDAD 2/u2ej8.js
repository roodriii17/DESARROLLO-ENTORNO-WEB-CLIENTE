function mostrarImagenAleatoria() {
    const imagenes = [
        'img/imagen1.jpg',
        'img/imagen2.jpg',
        'img/imagen3.jpg'
    ];

    // Seleccionar imagen aleatoria
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const imagenAleatoria = imagenes[indiceAleatorio];

    // Asignar la imagen aleatoria al elemento <img>
    document.getElementById("imagenAleatoria").src = imagenAleatoria;
}

// Ejecutar la función al cargar la página
window.onload = mostrarImagenAleatoria;
