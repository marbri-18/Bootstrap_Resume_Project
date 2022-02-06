const API_KEY = "AIzaSyCC98DC75dsHFP42IzEws2je3yaw5HDU7s";

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
}