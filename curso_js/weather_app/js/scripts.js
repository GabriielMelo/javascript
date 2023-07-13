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
    iconClima: ""
}


// ****************** preencher clima *******************
function preencherClimaAtual(cidade, estado, pais, tempAtual, tempMin, tempMax, textClima, iconClima) {

    var texto_local = cidade + ", " + estado + ", " + pais;
    var icon = document.getElementById("icone_clima");
    document.getElementById("texto_local").innerHTML = texto_local;
    document.getElementById("texto_temperatura").innerHTML = String(tempAtual) + "&deg;";
    document.getElementById("texto_clima").innerHTML = textClima;
    icon.style.backgroundImage = "url('" + weatherObject.iconClima + "')";
}

async function prev5Dias(localCode) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${localCode}?apikey=${accWeatherApiKey}&language=pt-br&metric=true`);
        data = await resposta.json();
        console.log("Previsão 5 Dias", data)
    } catch {
        console.log('Erro na requisição');
    }
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

        const Clima = async () => {
            weatherObject.tempAtual = data[0].Temperature.Metric.Value;
            weatherObject.textClima = data[0].WeatherText;
            var iconNumber = data[0].WeatherIcon <= 9 ? "0" + String(data[0].WeatherIcon) : data[0].WeatherIcon;
            weatherObject.iconClima = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;

            console.log(weatherObject);
        }
        const Preencher = async () => {
            preencherClimaAtual(weatherObject.cidade, weatherObject.estado, weatherObject.pais, weatherObject.tempAtual, weatherObject.tempMin, weatherObject.tempMax, weatherObject.textClima, weatherObject.iconClima);
            console.log(data);
        }
        await Promise.all([
            Clima(),
            Preencher(),
        ]);

    } catch (error) {
        console.log('Erro na requisição TempAtual')
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
            console.log(weatherObject.estado, weatherObject.pais);
        }
        const tempAtual = async () => {
            await pegarTempoAtual(localCode);
            console.log(data);
        }
        const prev = async () => {
            await prev5Dias(localCode);
        }
        await Promise.all([
            getCityCountryState(),
            tempAtual(),
            prev(),

        ]);

    } catch (error) {
        console.log('Erro na requisição Local')
    }
}



pegarCoordIP();





