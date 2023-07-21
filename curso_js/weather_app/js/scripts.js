// Weather APP

// Desenvolvido por Gabriel Melo

// ****************** Variaveis ******************

var accWeatherApiKey = "kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq";
var mapBoxKey = "pk.eyJ1IjoiZ2FicmlpZWxtZWxvIiwiYSI6ImNsa2QxcGl4bTBzaTUzZm54ZmVvanY0ZGQifQ.QaWwAfqRmocRHPgKJ667Kg";
var weatherObject = {
    cidade: "",
    estado: "",
    pais: "",
    tempAtual: "",
    tempMin: "",
    tempMax: "",
    textClima: "",
    iconClima: "",
    prev: [],
    prevHour: []
}

// ****************** Variaveis ******************

// **************** evento pesquisa *****************

document.getElementById("local").onkeydown = (e) => {
    if (e.key == "Enter") {
        let local = document.getElementById("local").value;
        local = encodeURI(local);
        if (local) {
            inputSearch(local);
        } else {
            console.log('Local Inválido');
        }
    }
}

document.getElementById("search-button").onclick = () => {
    let local = document.getElementById("local").value;
    local = encodeURI(local);
    if (local){
        inputSearch(local);
    } else {
        console.log('Local Inválido');
    }
}
// **************** evento pesquisa *****************

// ****************** preencher clima *******************

async function gerarGrafico(weatherObject){

    Highcharts.chart('hourly_chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Temperatura Hora a Hora'
        },
        xAxis: {
            categories: [weatherObject.prevHour[0].hour, weatherObject.prevHour[1].hour, weatherObject.prevHour[2].hour, weatherObject.prevHour[3].hour, weatherObject.prevHour[4].hour,weatherObject.prevHour[5].hour, weatherObject.prevHour[6].hour, weatherObject.prevHour[7].hour, weatherObject.prevHour[8].hour, weatherObject.prevHour[9].hour,weatherObject.prevHour[10].hour, weatherObject.prevHour[11].hour]
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
            data: [weatherObject.prevHour[0].temphour, weatherObject.prevHour[1].temphour, weatherObject.prevHour[2].temphour, weatherObject.prevHour[3].temphour, weatherObject.prevHour[4].temphour,weatherObject.prevHour[5].temphour, weatherObject.prevHour[6].temphour, weatherObject.prevHour[7].temphour, weatherObject.prevHour[8].temphour, weatherObject.prevHour[9].temphour,weatherObject.prevHour[10].temphour, weatherObject.prevHour[11].temphour]
        }]
    });
    

}

function preencherClimaAtual(cidade, estado, pais, tempAtual, tempMin, tempMax, textClima, iconClima) {

    var texto_local = cidade + ", " + estado + ", " + pais;

    var icon = document.getElementById("icone_clima");


    document.getElementById("texto_local").innerHTML = texto_local;
    document.getElementById("texto_temperatura").innerHTML = String(tempAtual) + "&deg;";
    document.getElementById("texto_clima").innerHTML = textClima;
    icon.style.backgroundImage = "url('" + iconClima + "')";
    document.getElementById("texto_max_min").innerHTML = tempMin + "&deg;" + " / " + tempMax + "&deg;";
}

// ****************** preencher clima *******************

// ****************** Requisições ***********************

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

async function inputSearch(local){
    try{
        const  resposta = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapBoxKey}`);
        data = await resposta.json();
        console.log("Input", data);
        var long = data.features[0].geometry.coordinates[0];
        var lat = data.features[0].geometry.coordinates[1];
        Promise.all([pegarLocal(lat,long)])
       
    }catch {
        console.log('Erro na requisição Pesquisa');
        window.alert('Não Localizado');
    }
}

async function pegarLocal(lat,long) {

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
            prevHour(localCode),
            pegarTempoAtual(localCode),
        ]);

    } catch (error) {
        console.log('Erro na requisição Local')
    }
}

async function prevHour(localCode) {
  try {
    const resposta = await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${localCode}?apikey=${accWeatherApiKey}&language=pt-br&metric=true`);
    const data = await resposta.json();

    // Definir o objeto weatherObject
    

    for (var i = 0; i < data.length ; i++) {
      var hora = new Date(data[i].DateTime);

      weatherObject.prevHour.push({
        hour: hora < 9 ? "0" + String(hora.getHours()) + "h00" : String(hora.getHours()) + "h00",
        temphour: data[i].Temperature.Value
      });
    }

    console.log('Objeto weather', weatherObject);
  } catch (error) {
    console.log('Erro na requisição da previsão hora a hora:', error);
  }
}

async function prev5Dias(localCode) {
    document.getElementById("info_5dias").innerHTML = "";
    dias_semana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"];
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${localCode}?apikey=${accWeatherApiKey}&language=pt-br&metric=true`);
        var data = await resposta.json();
        console.log("Previsão 5 Dias", data);
        weatherObject.tempMin = String(data.DailyForecasts[0].Temperature.Minimum.Value);
        weatherObject.tempMax = String(data.DailyForecasts[0].Temperature.Maximum.Value);

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
    } catch {
        console.log('Erro na requisição');
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
            gerarGrafico(weatherObject),
            preencherClimaAtual(weatherObject.cidade, weatherObject.estado, weatherObject.pais, weatherObject.tempAtual, weatherObject.tempMin, weatherObject.tempMax, weatherObject.textClima, weatherObject.iconClima),
        ]);
    } catch (error) {
        console.log('Erro na requisição TempAtual')
    }

}

// ****************** Requisições ***********************


// ****************** Execução    ***********************

pegarCoordIP();

// ****************** Execução    ***********************
