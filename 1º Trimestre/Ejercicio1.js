function actualizarHora() {
    const fechaActual = new Date();
    document.getElementById('anio').textContent = 'Año actual: ' + fechaActual.getFullYear();
    document.getElementById('mes').textContent = 'Mes actual: ' + (fechaActual.getMonth() + 1);
    document.getElementById('dia').textContent = 'Día actual: ' + fechaActual.getDate();
    document.getElementById('hora').textContent = 'Hora actual: ' + fechaActual.getHours();
    document.getElementById('minutos').textContent = 'Minutos actuales: ' + fechaActual.getMinutes();
    document.getElementById('segundos').textContent = 'Segundos actuales: ' + fechaActual.getSeconds();
}

// Actualiza la hora cada segundo
setInterval(actualizarHora, 1000);
