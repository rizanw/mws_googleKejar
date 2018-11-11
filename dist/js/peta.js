
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

const URL = "asset/peta.json";

async function f(url) {
    try {
        let response = await (fetch(url));
        let data = await response.json();
        localStorage.setItem("places", JSON.stringify(data.places));

    }catch (e) {
        console.log(e);
    }
}

f(URL);

let places = JSON.parse(localStorage.getItem("places"));

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.restoran);
    marker.on('click', showLocation);
}