// Generar un número aleatorio entre 0 y 1
function generarNumero01() {
    let num = Math.random();
    document.getElementById("resultado01").textContent = "Número aleatorio entre 0 y 1: " + num;
}

// Generar un número aleatorio entre 100 y 200
function generarNumero100200() {
    let num = Math.random() * (200 - 100) + 100;
    document.getElementById("resultado100200").textContent = "Número aleatorio entre 100 y 200: " + num.toFixed(2);
}

// Generar un número aleatorio entre dos valores ingresados por el usuario
function generarNumeroEntreDosValores() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    // Validar que los valores ingresados sean números
    if (isNaN(valor1) || isNaN(valor2)) {
        document.getElementById("resultadoValores").textContent = "Por favor, ingresa dos valores numéricos válidos.";
        return;
    }

    // Asegurar que valor1 sea menor que valor2
    let min = Math.min(valor1, valor2);
    let max = Math.max(valor1, valor2);

    let num = Math.random() * (max - min) + min;
    document.getElementById("resultadoValores").textContent = "Número aleatorio entre " + min + " y " + max + ": " + num.toFixed(2);
}
