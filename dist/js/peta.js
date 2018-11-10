
let mymap = L.map('mapid').setView([-7.269619, 112.752205], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org / ">OpenStreetMap</a> contributors, <a href = "https://creativecommons.org/licenses/by-sa/2.0/" > CC - BY - SA </a>,Imagery © <a href = "https://www.mapbox.com/" > Mapbox </a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoicml6YW53IiwiYSI6ImNqb2E3YTVmZDFtNDQzd3B1aXRzOXl4N2YifQ.E7rC0PXjEIoi7U6e2FGCdg'
}).addTo(mymap);

function findLocation(x, y) {
    for (var i = 0; i < places.length; i++) {
        if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
            return i;
        }
    }
    return -1;
}

function showLocation(e) {
    let ix = findLocation(e.latlng.lat, e.latlng.lng);
    if (ix >= 0) {
        img.src = places[ix].gambar;
        par.textContent = places[ix].review;
    }
}

let gmb = document.getElementById("gmb");
let rev = document.getElementById("review");
let img = document.createElement("img");
let par = document.createElement("p");

gmb.appendChild(img);
rev.appendChild(par);

let r0 = "restoran spanyol di jakarta yang dekat dengan kantor saya";
let r1 = "warung kopi cita rasa yang sangat tinggi dengan harga yang murah";
let r2 = "Ikan bakar kualitas tinggi, hampir gosong tapi belum";
let r3 = "Steak lokal harga impor, 200gr dan 300gr mentah ";
let r4 = "seafood international lobster, king crabs, cumi, kerang, semua ada";

let places = [
    {
        "lokasi": [-7.266712, 112.796374],
        "restoran": "McDonalds Mulyosari",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": "restoran spanyol di jakarta yang dekat dengan kantor saya"
    },
    {
        "lokasi": [-7.266446, 112.796334],
        "restoran": "KFC Mulyosari",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.272629, 112.797207],
        "restoran": "PHD Mulyosari",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.266039, 112.796194],
        "restoran": "PizzaHut Mulyosari",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.280249, 112.774577],
        "restoran": "Carl's Jr Kertajaya",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.279949, 112.769219],
        "restoran": "Richeese Factory Manyar",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.279622, 112.766367],
        "restoran": "PizzaHut Manyar",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
    {
        "lokasi": [-7.279470, 112.765328],
        "restoran": "McDonalds Manyar",
        "gambar": "asset/pict/mcdmulyos.jpg",
        "review": r0
    },
];

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.restoran);
    marker.on('click', showLocation);
}