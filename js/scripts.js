//business logic
function Location(city, country, attraction) {
  this.city = city;
  this.country = country;
  this.attraction = attraction;
}

Location.prototype.destination = function() {
  return this.city + ", " + this.country;
}

//user inferface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#city").val();
    var inputtedCountry = $("input#country").val();
    var inputtedAttraction = $("input#attraction").val();
    var newLocation = new Location(inputtedCity, inputtedCountry, inputtedAttraction);

    $("ul#locations").append("<li><span class='location'>" + newLocation.destination() + "</span></li>");

    $(".location").last().click(function() {
        $("#show-location").show();
        $("#show-location h2").text(newLocation.city);
        $(".country").text(newLocation.country);
        $(".attraction").text(newLocation.attraction);
    });
  });
});
