// Solicitar datos al usuario
let columnas = prompt("Introduce el número de columnas:");
let filas = prompt("Introduce el número de filas:");
let ancho = prompt("Introduce el ancho de las celdas (en píxeles):");
let alto = prompt("Introduce el alto de las celdas (en píxeles):");

document.write("<table border='1' cellspacing='2' bgcolor='black'>");

for (let i = 1; i <= filas; i++) {
  document.write("<tr bgcolor='white' height='" + alto + "'>");
  for (let j = 1; j <= columnas; j++) {
    document.write("<td width='" + ancho + "'>&nbsp;</td>");
  }
  document.write("</tr>");
}

document.write("</table>");
