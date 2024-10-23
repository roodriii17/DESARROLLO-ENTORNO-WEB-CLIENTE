function generarTabla() {
    const tbody = document.getElementById("tablaSeno").querySelector("tbody");
    tbody.innerHTML = ""; // Limpiar tabla antes de generar

    for (let i = 1; i <= 10; i++) {
        const fila = document.createElement("tr");
        
        const celdaNumero = document.createElement("td");
        celdaNumero.textContent = i;
        
        const celdaSeno = document.createElement("td");
        celdaSeno.textContent = Math.sin(i).toFixed(4);
        
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaSeno);
        
        tbody.appendChild(fila);
    }
}
