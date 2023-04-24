const api_weat="ae815cd889230e9941f6da0d4007647a";
const basiurl="http://api.openweathermap.org/";





function namepay(){

    const jsonStr = [];
    let urlf=basiurl+'geo/1.0/direct?q=azrou,maroc&appid='+api_weat;
    fetch(urlf)
    .then((response) => response.json())
    .then((datdah) => {
   
      
      sessionStorage.setItem('namepy',datdah[0]['name'] );
      sessionStorage.setItem('lat',datdah[0]['lat'] );

      sessionStorage.setItem('lan',datdah[0]['lon'] );
      water();
    }
    )

   


}

function getWeather() {
  var location = document.getElementById("location").value;
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid="+api_weat;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var forecast = data.list.slice(0, 15);
      var html = "";

      forecast.forEach((item) => {
        var date = new Date(item.dt_txt);
        var dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
        var weather = item.weather[0].main;
        var temp = Math.round(item.main.temp - 273.15);
        var description = item.weather[0].description;

        html += "<div><p>" + dayOfWeek + "</p><p>Weather: " + weather + "</p><p>Temperature: " + temp + "°C</p><p>Description: " + description + "</p></div>";
      });

      document.getElementById("weather").innerHTML = html;
    })
    .catch(error => console.log(error));
}


var gr=namepay();


function water(){


 const naep=   sessionStorage.getItem('namepay');
 const lat= sessionStorage.getItem('lat');
 const lan= sessionStorage.getItem('lan');
let urlw=basiurl+'data/2.5/weather?lat='+lat+'&lon='+lan+'&appid='+api_weat
fetch(urlw)
.then((response) => response.json())
.then((datawat) => {

  
console.log(datawat);
}
)

}