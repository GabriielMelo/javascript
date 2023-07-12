// ****************** preencher clima *******************


function preencherClimaAtual(cidade,estado,pais,tempAtual,textClima,iconClima){

    var texto_local = cidade +", " + estado + ", "+ pais;
    document.getElementById("#texto_local").innerHTML = texto_local;
    document.getElementById("#texto_clima").innerHTML = textClima;
    document.getElementById("#texto_temperatura").innerHTML = String(tempAtual) + "&deg;";

}

// preencherClimaAtual(weatherObject.cidade,weatherObject.estado,weatherObject.pais,weatherObject.tempAtual,weatherObject.tempMin,weatherObject.tempMax,weatherObject.textClima,weatherObject.iconClima);

// ********** Requisições **************
var accWeatherApiKey = "kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq";
var weatherObject = {
    cidade: "",
    estado: "",
    pais:"",
    tempAtual:"",
    textClima:"",
    iconClima: ""
}

async function pegarTempoAtual(localCode) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${localCode}?apikey=${accWeatherApiKey}&language=pt-br`)
        var data = await resposta.json();
        weatherObject.tempAtual = data[0].Temperature.Metric.Value;
        weatherObject.textClima = data[0].WeatherText;
        weatherObject.iconClima = "";

        preencherClimaAtual(weatherObject.cidade,weatherObject.estado,weatherObject.pais,weatherObject.tempAtual,weatherObject.tempMin,weatherObject.tempMax,weatherObject.textClima,weatherObject.iconClima);
        console.log(data);
    } catch (error) {

        console.log('Erro na requisição TempAtual')
    }

}

// A função pegar local irá aguardar resposta da função coordIP para obter os dados da latitude e longitude de acordo com o endereço de ip.

async function pegarLocal(lat, long) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accWeatherApiKey}&q=${lat}%2C%20${long}&language=pt-br`)
        var data = await resposta.json();
        var localCode = data.Key;
        console.log(data);
         try {
            weatherObject.cidade = data.ParentCity.LocalizedName;
         }catch {
            weatherObject.cidade = data.LocalizedName;
         }
        
        weatherObject.estado = data.AdministrativeArea.LocalizedName;
        weatherObject.pais = data.Country.LocalizedName;

        await pegarTempoAtual(localCode);


    } catch (error) {

        console.log('Erro na requisição Local')
    }
}
// pegarLocal(-23.59572, -46.34079);
// Função identifica o IP do usuário e dentro do objeto iremos obter a latitude e longitude de acordo com o endereço de IP, nisso chamamos a função passando os parametros obtidos pela função pegarCoordIP onde será executado a função pegarLocal.

async function pegarCoordIP() {
    var lat_padrao = -23.59572; // Em caso de bloqueio de ip
    var long_padrao = -46.34079; // em caso de bloqueio de ip.
    try {

        const resposta = await fetch(`http://www.geoplugin.net/json.gp`)
        var data = await resposta.json();

        if (data.geoplugin_latitude && data.geoplugin_longitude) {
            await pegarLocal(data.geoplugin_latitude, data.geoplugin_longitude)
        } else {
            pegarLocal(lat_padrao, long_padrao);
        };
    } catch (error) {

        console.log('Erro na requisição')
        pegarLocal(lat_padrao, long_padrao);
    }
}
pegarCoordIP();
// :)

