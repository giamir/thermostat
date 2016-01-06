
function refreshWeather() {
  var apiKey = '7780feb2af92db452b5657a648ff8068';
  // var coors = getPosition();
  $.ajax({
   type: 'GET',
   url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + coors.lat + '&lon=' + coors.lon + '&appid=' + apiKey,
   data: null,
   dataType: 'json',
   success: callback
  });
}

function callback(data){
  $('#notice').text(data);
}

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(storePosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function storePosition(position) {
//     var lat =  position.coords.latitude;
//     var lon =  position.coords.longitude;
//     var coors = [lat, lon];
//     return lat;
//     // http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

}





// function() {
//
//   visit api website
//   exttract information
//   insert new information into elements
//
// }

//
// $.ajax({
//    type: 'GET',
//    url: 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7780feb2af92db452b5657a648ff8068',
//    data: null,
//    dataType: 'json',
//    success: callback(data)
// });
//
// function callback(data){
//   window.alert(data);
// }

// $('#main-menu a').click(function(event) {
//    event.preventDefault();
//
//    $.ajax(this.href, {
//       success: function(data) {
//          $('#main').html($(data).find('#main *'));
//          $('#notification-bar').text('The page has been successfully loaded');
//       },
//       error: function() {
//          $('#notification-bar').text('An error occurred');
//       }
//    });
// });


  //
  // function getLocation() {
  //     if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //         $('#notice').text("Geolocation is not supported by this browser.");
  //     }
  // }
  //
  // function showPosition(position) {
  //     $('#notice').text("Latitude: " + position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude);
  // }
