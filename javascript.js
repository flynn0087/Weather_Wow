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
        todaysTemp(response);
        //forecastTemp(response);
    })

    function todaysTemp(response) {
        let tempFahren = (response.main.temp - 273.15) * 1.8 + 32;
        tempFahren = math.floor(tempFahren);
        $("#currentCity").empty();
        let card = $("<div>").addClass("card");
        let cardBody = $("<div>").addClass("cardBody")
        let city = $("<h4>").addClass("card-title").text(response.name);
        let temp = $("<p>").addClass("card-text current-temp").text("Temp: " + tempFahren + " F");
        let humid = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
        let wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + "MPH");
    
        cardBody.append(city, temp, humid, wind);
        card.append(cardBody);
        $("#currentCity").append(card)
    }
})

