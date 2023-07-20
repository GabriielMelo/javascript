// ****************** Variaveis ******************

var accWeatherApiKey = "kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq";
var weatherObject = {
    cidade: "",
    estado: "",
    pais: "",
    tempAtual: "",
    tempMin: "",
    tempMax: "",
    textClima: "",
    iconClima: "",
    prev: []
}

function prevHora(){
    
}

function gerarGrafico(){

    Highcharts.chart('hourly_chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Temperatura Hora a Hora'
        },
        xAxis: {
            categories: ['21h', '22h', '23h', '00h', '01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h']
        },
        yAxis: {
            title: {
                text: 'Temperatura (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },

        series: [{
            showInLegend : false,
            data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
                22.0, 17.8]
        }]
    });
    

}

gerarGrafico();


// ****************** preencher clima *******************
function preencherClimaAtual(cidade, estado, pais, tempAtual, tempMin, tempMax, textClima, iconClima) {

    var texto_local = cidade + ", " + estado + ", " + pais;

    var icon = document.getElementById("icone_clima");


    document.getElementById("texto_local").innerHTML = texto_local;
    document.getElementById("texto_temperatura").innerHTML = String(tempAtual) + "&deg;";
    document.getElementById("texto_clima").innerHTML = textClima;
    icon.style.backgroundImage = "url('" + iconClima + "')";
    document.getElementById("texto_max_min").innerHTML = tempMin + "&deg;" + " / " + tempMax + "&deg;";
}



// https://developer.accuweather.com/sites/default/files/35-s.png

// ****************** Requisições ******************

async function pegarCoordIP() {
    var lat_padrao = -23.59572; // Em caso de bloqueio de ip
    var long_padrao = -46.34079; // em caso de bloqueio de ip.

    try {
        const resposta = await fetch(`http://www.geoplugin.net/json.gp?`)
        var data = await resposta.json();


        if (data.geoplugin_latitude && data.geoplugin_longitude) {
            await pegarLocal(data.geoplugin_latitude, data.geoplugin_longitude);
            console.log('GeoPlugin', data);
        } else {
            pegarLocal(lat_padrao, long_padrao);
        }

    } catch (error) {
        console.log('Erro na requisição')
        pegarLocal(lat_padrao, long_padrao);
    }
}

async function pegarLocal(lat, long) {

    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accWeatherApiKey}&q=${lat}%2C%20${long}&language=pt-br`)
        var data = await resposta.json();
        var localCode = data.Key;
        console.log('LocalCode',data);
        const getCityCountryState = async () => {
            try {
                weatherObject.cidade = data.ParentCity.LocalizedName;
            } catch {
                weatherObject.cidade = data.LocalizedName;
            }
            weatherObject.estado = data.AdministrativeArea.LocalizedName;
            weatherObject.pais = data.Country.LocalizedName;
        }
        await Promise.all([
            getCityCountryState(),
            prev5Dias(localCode),
            pegarTempoAtual(localCode),
        ]);

    } catch (error) {
        console.log('Erro na requisição Local')
    }
}

async function pegarTempoAtual(localCode) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${localCode}?apikey=${accWeatherApiKey}&language=pt-br`)
        var data = await resposta.json();
        console.log("Temperatura Atual", data);
        const Clima = async () => {
            weatherObject.tempAtual = data[0].Temperature.Metric.Value;
            weatherObject.textClima = data[0].WeatherText;
            var iconNumber = data[0].WeatherIcon <= 9 ? "0" + String(data[0].WeatherIcon) : data[0].WeatherIcon;
            weatherObject.iconClima = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;
        }
        await Promise.all([
            Clima(),
            preencherClimaAtual(weatherObject.cidade, weatherObject.estado, weatherObject.pais, weatherObject.tempAtual, weatherObject.tempMin, weatherObject.tempMax, weatherObject.textClima, weatherObject.iconClima),
        ]);
    } catch (error) {
        console.log('Erro na requisição TempAtual')
    }

}

async function prev5Dias(localCode) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${localCode}?apikey=${accWeatherApiKey}&language=pt-br&metric=true`);
        var data = await resposta.json();
        console.log("Previsão 5 Dias", data);
        weatherObject.tempMin = String(data.DailyForecasts[0].Temperature.Minimum.Value);
        weatherObject.tempMax = String(data.DailyForecasts[0].Temperature.Maximum.Value);
        // **** previsão 5 dias ****
        dias_semana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"];
        for (let i = 0; i < data.DailyForecasts.length; i++) {
            var dataHoje = new Date(data.DailyForecasts[i].Date);
            weatherObject.prev[i] = {};
            weatherObject.prev[i].dia_semana = dias_semana[ dataHoje.getDay() ];
            weatherObject.prev[i].iconNumber = data.DailyForecasts[i].Day.Icon <= 9 ? "0" + String(data.DailyForecasts[i].Day.Icon) : data.DailyForecasts[i].Day.Icon;
            weatherObject.prev[i].iconClima = `https://developer.accuweather.com/sites/default/files/${weatherObject.prev[i].iconNumber}-s.png`;
            weatherObject.prev[i].Minimum = String(data.DailyForecasts[i].Temperature.Minimum.Value);
            weatherObject.prev[i].Maximum = String(data.DailyForecasts[i].Temperature.Maximum.Value);
            const dayElement = document.createElement("div");
            dayElement.className = "day col";
            const dayInnerElement = document.createElement("div");
            dayInnerElement.className = "day_inner";
            const daynameElement = document.createElement("div");
            daynameElement.className = "dayname";
            daynameElement.textContent = weatherObject.prev[i].dia_semana;
            const weatherIconElement = document.createElement("div");
            weatherIconElement.style.backgroundImage = `url('${weatherObject.prev[i].iconClima}')`;
            weatherIconElement.className = "daily_weather_icon";
            const maxMinTempElement = document.createElement("div");
            maxMinTempElement.className = "max_min_temp";
            maxMinTempElement.textContent = "Min " + weatherObject.prev[i].Minimum + "° / Max " + weatherObject.prev[i].Maximum + "°";
            dayInnerElement.appendChild(daynameElement);
            dayInnerElement.appendChild(weatherIconElement);
            dayInnerElement.appendChild(maxMinTempElement);
            dayElement.appendChild(dayInnerElement);
            document.getElementById("info_5dias").appendChild(dayElement);
        }

        // **** previsão 5 dias ****
        console.log("Weather Object", weatherObject);
    } catch {
        console.log('Erro na requisição');
    }
}

// pegarCoordIP();

// *********************************** Anotações *************************************************

// Requisição Hora a Hora : http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/2730729?apikey=kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq&language=PT-BR&metric=true ; 
// Exemplo objeto retorno da requisição : 

const hourObject = [
    {
      "DateTime": "2023-07-20T09:00:00-03:00",
      "EpochDateTime": 1689854400,
      "WeatherIcon": 7,
      "IconPhrase": "Nublado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 18,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=9&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=9&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T10:00:00-03:00",
      "EpochDateTime": 1689858000,
      "WeatherIcon": 6,
      "IconPhrase": "Predominantemente nublado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 18.9,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=10&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=10&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T11:00:00-03:00",
      "EpochDateTime": 1689861600,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 19.8,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=11&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=11&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T12:00:00-03:00",
      "EpochDateTime": 1689865200,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 20.3,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=12&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=12&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T13:00:00-03:00",
      "EpochDateTime": 1689868800,
      "WeatherIcon": 3,
      "IconPhrase": "Parcialmente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 21.3,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=13&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=13&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T14:00:00-03:00",
      "EpochDateTime": 1689872400,
      "WeatherIcon": 2,
      "IconPhrase": "Predominantemente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 22.1,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=14&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=14&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T15:00:00-03:00",
      "EpochDateTime": 1689876000,
      "WeatherIcon": 2,
      "IconPhrase": "Predominantemente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 22.5,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=15&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=15&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T16:00:00-03:00",
      "EpochDateTime": 1689879600,
      "WeatherIcon": 2,
      "IconPhrase": "Predominantemente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 21.5,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=16&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=16&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T17:00:00-03:00",
      "EpochDateTime": 1689883200,
      "WeatherIcon": 2,
      "IconPhrase": "Predominantemente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 20.5,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=17&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=17&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T18:00:00-03:00",
      "EpochDateTime": 1689886800,
      "WeatherIcon": 35,
      "IconPhrase": "Parcialmente nublado",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 19.4,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=18&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=18&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T19:00:00-03:00",
      "EpochDateTime": 1689890400,
      "WeatherIcon": 35,
      "IconPhrase": "Parcialmente nublado",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 19.2,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=19&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=19&unit=c&lang=pt-br"
    },
    {
      "DateTime": "2023-07-20T20:00:00-03:00",
      "EpochDateTime": 1689894000,
      "WeatherIcon": 35,
      "IconPhrase": "Parcialmente nublado",
      "HasPrecipitation": false,
      "IsDaylight": false,
      "Temperature": {
        "Value": 19.1,
        "Unit": "C",
        "UnitType": 17
      },
      "PrecipitationProbability": 0,
      "MobileLink": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=20&unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/campo-do-galvao/2730729/hourly-weather-forecast/2730729?day=1&hbhhour=20&unit=c&lang=pt-br"
    }
  ];

  var hora = new Date(hourObject[0].DateTime);
  hora =  hora > 9  ? "0" + String(hora.getHours()) + "h00" : String(hora.getHours()) + "h00";
  console.log(hora);
 

