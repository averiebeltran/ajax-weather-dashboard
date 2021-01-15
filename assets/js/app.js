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
            $(".city").html(response.name);
            $(".temp").html(response.main.temp);
            $(".humidity").html(response.main.humidity);
            $(".wind-speed").html(response.wind.speed);

            const lat = response.coord.lat;
            const lon = response.coord.lon;
            const uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat +"&lon=" + lon + "&appid=c2a1f6a8ab689e2fe8baffb9baf0d523";

            $.ajax({
                method: "GET",
                url: uvUrl,
                data: 'json',
                success: (response) => {
                    console.log(response);
                    $(".uv").html(response.value);
                }
            });
        }
    });
});
