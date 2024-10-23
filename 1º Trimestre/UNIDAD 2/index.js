function muestraPosicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition(muestraPosicion);

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


    // otro ejercicio

    function funcionQueLlamaGeolocation(posicion)
    {
        console.log("Esta en" + posicion.coords.latitude + " , " + posicion.coords.longitude);

    }

    function funcionError(error){
        console.log("Esta en" + posicion.coords.latitude + " , " + posicion.coords.longitude);
        console.log("Error numero" + error.code);
        console.log(error.message);
    }

    