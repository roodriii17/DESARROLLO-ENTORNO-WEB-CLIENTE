function resolverEcuacion() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos para a, b y c.";
        return;
    }

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        document.getElementById("resultado").textContent = "No hay soluciones reales.";
    } else if (discriminante === 0) {
        const solucion = -b / (2 * a);
        document.getElementById("resultado").textContent = "Una solución única: x = " + solucion;
    } else {
        const solucion1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const solucion2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.getElementById("resultado").textContent = "Dos soluciones: x₁ = " + solucion1 + ", x₂ = " + solucion2;
    }
}
