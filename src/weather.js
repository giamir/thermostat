// function refreshWeather(){
//   positionProvider();
// }
//
// function positionProvider() {
//   $.getJSON('https://freegeoip.net/json/')
//      .done (function(location) {
//           coords = {lat: location.latitude, lon: location.longitude};
//           weatherProvider(coords);
//      });
// }
//
// function weatherProvider(coords) {
//   var apiKey = '7780feb2af92db452b5657a648ff8068';
//   $.ajax({
//    type: 'GET',
//    url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&appid=' + apiKey,
//    data: null,
//    dataType: 'json',
//    success: callback
//   });
// }

function getLocation() {
  var deferred = $.Deferred();
  $.getJSON('https://freegeoip.net/json/').done(
    function(location) {
      coords = {lat: location.latitude, lon: location.longitude};
      deferred.resolve();
    }
  );
  return deferred.promise();
}

function getWeather(){
  var deferred = $.Deferred();
  var apiKey = '7780feb2af92db452b5657a648ff8068';
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.lon + '&appid=' + apiKey).done(
    function(data) {
      weather = data;
      deferred.resolve();
    }
  );
  return deferred.promise();
}

function callback(){
  var temperature = Math.floor(weather.main.temp - 273.15);
  // $('#notice').text(data.name+' '+data.weather[0].main+' '+temperature);
  $('#city').text(weather.name);
  $('#outside-temperature').text(temperature);
  $('#weather').text(weather.weather[0].main);
  $('#outcast-info').fadeIn('slow');
}

function refreshWeather(){
  getLocation().done(function(){
    getWeather().done(function(){
      callback();
    });
  });
}

  // weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ userCity +",uk&units=metric&APPID=08edfb8e9306032dca7e53b61d924bff";
  // $.get(weatherUrl, function(data) {
  //   $( "#outsideTemp" ).text(Math.floor(data.main.temp));
  //   $( "#weatherCondition" ).text(data.weather[0].main);
  //   $("#city").text(userCity);
  //   });
