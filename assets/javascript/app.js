var sampleAirports = ["ATL", "BNA", "BOS"];

function renderAirports() {

    $(".dropdown-content").empty();
  
    for (var i = 0; i < sampleAirports.length; i++) {
      var newAirport = $("<li>");
      newAirport.text(sampleAirports[i]);
      newAirport.attr("data", sampleAirports[i]);
      newAirport.attr("class", "badge");
      $(".dropdown-content").append(newAirport);
  
    }
  
  }
renderAirports();

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5155, lng: -122.6793},
    zoom: 13
    
  });

  var marker = new google.maps.Marker({
      position:{lat: 45.5155, lng: -122.6793},
      map:map
  });

  var infoWindow = new google.maps.InfoWindow({
      content: '<h4>Portland, Oregon</h4>'
  });

  marker.addListener('click', function() {
      infoWindow.open(map, marker);
  });
}



                  //////////WEATHER API//////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Portland,Oregon4&units=imperial&&APPID=d95b5935ea6d3467f2233abdafd385fd", function(data) {
console.log(data)

var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = data.main.temp;
var weather = data.weather[0].main;


$('.icon').attr('src', icon);
$('.weather').append(weather);
$('.temp').append(temp);

});
