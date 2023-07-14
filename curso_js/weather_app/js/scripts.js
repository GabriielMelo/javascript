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


// ****************** preencher clima *******************
function preencherClimaAtual(cidade, estado, pais, tempAtual, tempMin, tempMax, textClima, iconClima,prev) {

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

            console.log("Weather Object", weatherObject);
        }
        const Preencher = async () => {
            preencherClimaAtual(weatherObject.cidade, weatherObject.estado, weatherObject.pais, weatherObject.tempAtual, weatherObject.tempMin, weatherObject.tempMax, weatherObject.textClima, weatherObject.iconClima);
        }
        await Promise.all([
            Clima(),
            Preencher(),
        ]);

    } catch (error) {
        console.log('Erro na requisição TempAtual')
    }

}

async function prev5Dias(localCode) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${localCode}?apikey=${accWeatherApiKey}&language=pt-br&metric=true`);
        data = await resposta.json();
        console.log("Previsão 5 Dias", data);
        weatherObject.tempMin = String(data.DailyForecasts[0].Temperature.Minimum.Value);
        weatherObject.tempMax = String(data.DailyForecasts[0].Temperature.Maximum.Value);
        console.log("min", weatherObject.tempMin, "max", weatherObject.tempMax);
        //  previsão 5 dias
        for (let i = 1; i<data.DailyForecasts.length;i++){
            weatherObject.prev.push(data.DailyForecasts[i].Temperature);
        }
        console.log("prev", weatherObject.prev);

    } catch {
        console.log('Erro na requisição');
    }
}

async function pegarLocal(lat, long) {

    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accWeatherApiKey}&q=${lat}%2C%20${long}&language=pt-br`)
        var data = await resposta.json();
        var localCode = data.Key;
        const getCityCountryState = async () => {
            try {
                weatherObject.cidade = data.ParentCity.LocalizedName;
            } catch {
                weatherObject.cidade = data.LocalizedName;
            }
            weatherObject.estado = data.AdministrativeArea.LocalizedName;
            weatherObject.pais = data.Country.LocalizedName;
        }
        const tempAtual = async () => {
            await pegarTempoAtual(localCode);
            console.log("Local Info", data);
        }
        const prev = async () => {
            await prev5Dias(localCode);
        }
        await Promise.all([
            getCityCountryState(),
            prev(),
            tempAtual(),
        ]);

    } catch (error) {
        console.log('Erro na requisição Local')
    }
}



pegarCoordIP();





