$( document ).ready(function() {
    const data = {
        city: 'Austin'
    }

    const city = "austin";

    const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c2a1f6a8ab689e2fe8baffb9baf0d523";

    $.ajax({
        method: "GET",
        url: weatherUrl,
        data: 'json',
        success: (response) => {
            console.log(response);
            const icon = response.weather[0].icon;
            const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
            const timestamp = response.dt;
            const date = new Date(timestamp * 1000);
            const month = (date.getMonth() + 1);
            const day = (date.getDate());
            const year = (date.getFullYear());
            const currentDay = month + '/' + day + '/' + year;

            $(".city").html(response.name + ' ' + currentDay + "<img src=" + iconurl + ">");
            $(".temp").html("Temperature: " + response.main.temp);
            $(".humidity").html("Humidity: " + response.main.humidity);
            $(".wind-speed").html("Wind Speed: " + response.wind.speed);

            const lat = response.coord.lat;
            const lon = response.coord.lon;
            const uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=c2a1f6a8ab689e2fe8baffb9baf0d523";
            const fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=c2a1f6a8ab689e2fe8baffb9baf0d523"

            $.ajax({
                method: "GET",
                url: uvUrl,
                data: 'json',
                success: (response) => {
                    console.log(response);
                    $(".uv").html("UV: " + response.value);
                }
            });

            $.ajax({
                method: "GET",
                url: fiveDayUrl,
                data: 'json',
                success: (response) => {
                    console.log(response);
                    const forecastDays = response.daily;

                    jQuery.each(forecastDays, function(index, value) {
                        const forecastTimestamp = value.dt;
                        const forecastDate = new Date(forecastTimestamp * 1000);
                        const forecastMonth = (forecastDate.getMonth() + 1);
                        const forecastDay = (forecastDate.getDate());
                        const forecastYear = (forecastDate.getFullYear());
                        const formattedDay = forecastMonth + '/' + forecastDay + '/' + forecastYear;

                        if (index < 6 && index > 0) {
                            console.log(formattedDay);
                            
                        }
                    });
                }
            });
        }
    });
});
