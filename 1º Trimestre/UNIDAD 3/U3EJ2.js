// Función que devuelve un número aleatorio entre 1 y 6
function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

// Ejecutamos la función y mostramos el resultado en la consola
let resultado = lanzamiento();
document.write("El resultado del lanzamiento es: " + resultado);

lanzamiento();