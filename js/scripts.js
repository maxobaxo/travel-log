//business logic
function Location(city, state, country, memory, attraction, food, music) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.memory = memory;
  this.attraction = attraction;
  this.food = food;
  this.music = music;
}

Location.prototype.destination = function() {
  return this.city + ", " + this.country;
}

//user inferface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#state").val();
    var inputtedCountry = $("input#country").val();
    var inputtedMemory = $("input#memory").val();
    var inputtedAttraction = $("input#attraction").val();
    var inputtedFood = $("input#food").val();
    var inputtedMusic = $("input#music").val();

    var newLocation = new Location(inputtedCity, inputtedState, inputtedCountry, inputtedMemory, inputtedAttraction, inputtedFood, inputtedMusic);

    $("ul#locations").append("<li><span class='location'>" + newLocation.destination() + "</span></li>");

    $(".location").last().click(function() {
        $("#show-location").show();
        $("#show-location h2").text(newLocation.city);
        $(".state").text(newLocation.state);
        $(".country").text(newLocation.country);
        $(".memory").text(newLocation.memory);
        $(".attraction").text(newLocation.attraction);
        $(".food").text(newLocation.food);
        $(".music").text(newLocation.music);
    });
  });
});
