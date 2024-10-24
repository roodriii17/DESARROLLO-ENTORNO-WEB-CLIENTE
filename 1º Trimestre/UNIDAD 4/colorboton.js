const btn = document.getElementsByClassName("buttom");
const cajaTexto = document.getElementById("TextBox");
function saltaAlert(e)
{
    console.log(e);
    alert ("Has clikado")
}

btn[0].addEventListener("click", () => document.body.style.backgroundColor = "red");
btn[0].addEventListener("mouseover", () => document.body.style.backgroundColor = "white");
btn[0].addEventListener("mouseout", () => document.body.backgroundColor = "white");
btn[0].addEventListener("click",saltaAlert);
btn[1].addEventListener("click", () => document.body.style.backgroundColor = "blue");
cajaTexto.addEventListener("keydown", () =>console.log("Has escrito en la caja"));

