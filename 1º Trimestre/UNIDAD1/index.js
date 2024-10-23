<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla Alternada en JavaScript</title>
</head>
<body>

    <h2>Tabla con columnas alternadas</h2>
    
    <script>
        // Solicitar al usuario el número de columnas, la altura y el ancho de las celdas
        let numColumnas = parseInt(prompt("Introduce el número de columnas:"));
        let alto = parseInt(prompt("Introduce la altura de las celdas (en píxeles):"));
        let ancho = parseInt(prompt("Introduce el ancho de las celdas (en píxeles):"));

        // Escribir el comienzo de la tabla
        document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
        document.write('<tr height="' + alto + '">');

        // Bucle para crear las columnas de la tabla
        for (let i = 1; i <= numColumnas; i++) {
            // Si el índice es impar, el color de fondo es negro
            if (i % 2 === 1) {
                document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
            } 
            // Si el índice es par, el color de fondo es blanco
            else {
                document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
            }
        }

        // Cerrar la fila y la tabla
        document.write('</tr>');
        document.write('</table>');
    </script>

</body>
</html>
