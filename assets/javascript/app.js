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