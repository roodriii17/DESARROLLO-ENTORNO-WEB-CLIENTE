let tamañoCelda = prompt("Introduce el tamaño de las celdas (en píxeles):");

document.write("<table border='1' cellspacing='0'>");

for (let i = 0; i < 8; i++) {
  document.write("<tr>");
  for (let j = 0; j < 8; j++) {
    let color = (i + j) % 2 == 0 ? "white" : "black";
    document.write("<td bgcolor='" + color + "' width='" + tamañoCelda + "' height='" + tamañoCelda + "'></td>");
  }
  document.write("</tr>");
}

document.write("</table>");
