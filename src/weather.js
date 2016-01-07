function refreshWeather(){
  positionProvider();
}

function positionProvider() {
  $.getJSON('https://freegeoip.net/json/')
     .done (function(location) {
          coords = {lat: location.latitude, lon: location.longitude};
          weatherProvider(coords);
     });
}

function weatherProvider(coords) {
  var apiKey = '7780feb2af92db452b5657a648ff8068';
  $.ajax({
   type: 'GET',
   url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&appid=' + apiKey,
   data: null,
   dataType: 'json',
   success: callback
  });
}

function callback(data){
  var temperature = Math.floor(data.main.temp - 273.15);
  $('#notice').text(data.name+' '+data.weather[0].main+' '+temperature);
}
