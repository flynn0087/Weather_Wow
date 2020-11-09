let apiKey = "4bfa68a6f9552c990302f5d6025c306a";
let city = $("#citySearch").val();

$("#searchBtn").on("click", function() {
    city = $("#citySearch").val();
    let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?" + city + apiKey;
    
})