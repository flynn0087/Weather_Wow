let apiKey = "&appid=4bfa68a6f9552c990302f5d6025c306a";
let city = $("#citySearch").val();

$("#searchBtn").on("click", function() {
    let city = $("#citySearch").val();
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .then(function (response){
        console.log(response);
    })
    //todaysTemp(response);
    //forecastTemp(response);
})