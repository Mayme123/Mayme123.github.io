$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude,       function(json){
        console.log(JSON.stringify(json));
        $(".location").html(json.name+", "+json.sys.country);
        $(".weather-icon").attr("src", json.weather[0].icon);
        //$(".weather-icon").attr("src", "img/weather-icon.png");
        $(".temp").html(Math.ceil((json.main.temp)*(9/5) + 32)+"\xB0F");
        $(".conditions").html(json.weather[0].description);
      })
    })
  }
});
