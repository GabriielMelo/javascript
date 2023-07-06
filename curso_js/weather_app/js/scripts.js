
$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

$.ajax({
    url : "http://dataservice.accuweather.com/currentconditions/v1/28143?apikey=kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq&language=pt-br",
    type: "GET",
    dataType: "json",
    sucess: function(data){
        console.log(data);
    },
    error: function(){
        console.log("Erro na requisição")
    }
    
});

});

