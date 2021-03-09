
const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollwheelZoom: false,
    zoomControl: false
}


// create map
var mymap = L.map('mapid', options).setView([-8.3053059,-35.0219841], 16);

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// create icon
const icon = L.icon({
    iconUrl: "img/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and add marker
L.marker([-8.3053059,-35.0219841],{icon}).addTo(mymap)

// image gallery
function selectImage(event) {
    const button = event.currentTarget
    //removar todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach
    // selecionar a image clicada

    //atualizar o container de image

    //adicionar a classe .active para este botão
}