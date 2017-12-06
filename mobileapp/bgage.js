/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pagecreate", "#map", function() {
    var defaultLatLng = new google.maps.LatLng(43.5142733, -83.9623559,15);
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});

$(document).ready(function(){
  $("#convert").click(function(){
    var ftemp = $("#f").val();
    var ctemp = (ftemp - 32) * (5/9);
    $("#c").append(ctemp);
  });
});

$(document).ready(function(){
  console.log("hello");
  $("dtob").unbind("click");
  $("dtob").click(function(){
    console.log("in function")
    var dnum = $("dec").val();
    console.log(dnum);
    var bin = (dnum).toString(2);
    console.log(bin);
    $("#b").append(bin);
  });
});
