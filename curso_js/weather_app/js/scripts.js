
// $(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

// $.ajax({
//     url : "http://dataservice.accuweather.com/currentconditions/v1/28143?apikey=kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq&language=pt-br",
//     type: "GET",
//     dataType: "json",
//     sucess: function(data){
//         console.log(data);
//     },
//     error: function(){
//         console.log("Erro na requisição")
//     }
    
// });

// });

var accWeatherApiKey = "kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq";

async function localCode(localCode,lat,long){



    try{
        var localCode = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="${accWeatherApiKey}"=${lat}%2C%20${long}&language=pt-br`);
       getWeather();
    }catch (error){
        console.log('Erro na requisição', error);
        throw error ; 
    }

 

async function getWeather(){
    try{

        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/"${localCode}"?apikey=${accWeatherApiKey}&language=pt-br`);
        const dados = await response.json();
        console.log(dados);
        return dados;
        
    }
    catch ( error){
        console.log('Erro na requisição', error);
        throw error ; 
    }
    
}
}

localCode(-23.489387,-46.436476);