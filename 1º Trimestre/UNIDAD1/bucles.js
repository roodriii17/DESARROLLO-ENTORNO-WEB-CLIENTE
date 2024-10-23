// 1. Mostrar todos los números de 1 a n aumentando de 1 en 1
function mostrarNumerosAumentando() {
    let n = parseInt(prompt("Introduce un número n:"));
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// 2. Mostrar todos los números de 1 a n aumentando de 2 en 2
function mostrarNumerosAumentandoDeDos() {
    let n = parseInt(prompt("Introduce un número n:"));
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}

// 3. Mostrar todos los números de n a 1 disminuyendo de 1 en 1
function mostrarNumerosDisminuyendo() {
    let n = parseInt(prompt("Introduce un número n:"));
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}

// 4. Escribir la tabla del 9 hasta 9x10
function tablaDelNueve() {
    for (let i = 1; i <= 10; i++) {
            console.log("9 x " + i + " = " + (9 * i));
        }
}

// 5. Pedir un número y sumar todos los dígitos, validando que no haya letras
function sumarDigitosNumero() {
    let input = prompt("Introduce un número:");
    if (/^\d+$/.test(input)) {  // Validar que solo contenga dígitos
        let suma = 0;
        for (let i = 0; i < input.length; i++) {
            suma += parseInt(input[i]);
        }
        console.log("La suma de los dígitos es: " + suma);
    } else {
        console.log("Error: El número ingresado contiene letras.");
    }
}

// 6. Realizar la suma de todos los números pares entre N y M
function sumarNumerosParesEntreNandM() {
    let N = parseInt(prompt("Introduce el número N:"));
    let M = parseInt(prompt("Introduce el número M:"));
    
    let suma = 0;
    for (let i = N; i <= M; i++) {
        if (i % 2 ==0) {
            suma += i;
        }
    }
    document.write("La suma de los números pares entre " + N + " y " + M + " es: " + suma);
}

// 7. Realizar la sumatoria de los primeros N números
function sumatoriaPrimerosNumeros() {
    let N = parseInt(prompt("Introduce un número N:"));
    
    let suma = 0;
    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    document.write("La sumatoria de los primeros " + N + " números es: " + suma);
}


// Llamadas a las funciones (puedes descomentar las que quieras probar)

// mostrarNumerosAumentando();
// mostrarNumerosAumentandoDeDos();
// mostrarNumerosDisminuyendo();
// tablaDelNueve();
// sumarDigitosNumero();
// sumarNumerosParesEntreNandM();
// sumatoriaPrimerosNumeros();
