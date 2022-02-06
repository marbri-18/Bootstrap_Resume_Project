const API_KEY = "AIzaSyCC98DC75dsHFP42IzEws2je3yaw5HDU7s";

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "abcdefghijklmnopqrstuvwxyz";
    var locations = [
        {lat: 50.75910, lng: -1.99549},
        {lat: 50.76187, lng: -1.99558},
        {lat: 50.72319, lng: -1.87456},
        {lat: 50.70710, lng: -1.90932},
        {lat: 50.68959, lng: -1.93773},
        {lat: 50.71286, lng: -1.98623},
        {lat: 50.60905, lng: -1.95684},
        {lat: 50.61966, lng: -2.24976},
        {lat: 50.69819, lng: -2.21937},
        {lat: 51.01685, lng: -3.10212},
        {lat: 51.14699, lng: -2.71846},
        {lat: 50.71598, lng: -2.43091},
        {lat: 50.75945, lng: -1.99315},
        {lat: 50.76088, lng: -1.99540},
        {lat: 50.76375, lng: -1.99472},
    ];

    var markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % label.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {imagepath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer/m"})
}