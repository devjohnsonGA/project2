

function initMap() {
    var uluru = {lat: 38.9072, lng: -77.0369}
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    })
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    })
}

