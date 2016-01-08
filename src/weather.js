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

function getImage(){
  var deferred = $.Deferred();
  var accuracy = 0.001;
  var area = {
    minx: coords.lat - accuracy,
    miny: coords.lon - accuracy,
    maxx: coords.lat + accuracy,
    maxy: coords.lon + accuracy,
  };
  var url_api = 'http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=20&minx=' + area.minx + '&miny=' + area.miny + '&maxx=' + area.maxx + '&maxy=' + area.maxy + '&size=original&mapfilter=true';
  $.ajax({
    type: 'get',
    url: url_api,
    datatype: 'jsonp'
  }).done(
    function(data) {
      url_image = data;
      deferred.resolve();
    }
  );
  return deferred.promise();
}

function callback(){
  var temperature = Math.floor(weather.main.temp - 273.15);
  $('#city').text(weather.name);
  $('#outside-temperature').text(temperature);
  $('#weather').text(weather.weather[0].main);
  $('#outcast-info').fadeIn('slow');
}

function refreshWeather(){
  getLocation().done(function(){
    getImage();
    getWeather().done(function(){
      callback();
    });
  });
}
