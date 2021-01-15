$( document ).ready(function() {
    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c2a1f6a8ab689e2fe8baffb9baf0d523",
        dataType: "json"
      })
        .done(function( msg ) {
          alert( "Data Saved: " + msg );
        });
});
