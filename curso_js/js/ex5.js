
$(document).ready(function(){

$.ajax({
    url: "https://restcountries.com/v3.1/all",
    type: "GET",
    dataType: "json",
    
}).done(function(data){
    var option = $('<option></option>');

    $("#paises").change(function(){
        for (i=0;i<data.length;i++){
            if (data[i].altSpellings[1] === undefined){
                continue
            } else {
                $("paises").text('<option>'+  data[i].altSpellings[1]+'</option>');
            }
            // $("#paises").text(data[i].altSpellings[1]);
        }

    });

       
    
   
}).fail(function(){
    console.log("Falha na requisição")
});


//  data = data[i].altSpellings[1];

});

