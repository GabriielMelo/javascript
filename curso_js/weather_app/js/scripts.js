



// ********** Requisições ***********
var accWeatherApiKey = "kQ94WGEKAe7Ae968qc1ehnYVqfqbhDbq";

async function pegarTempoAtual(localCode) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${localCode}?apikey=${accWeatherApiKey}&language=pt-br`)
        var data = await resposta.json();
        console.log(data);
    } catch (error) {

        console.log('Erro na requisição')
    }

}

// A função pegar local irá aguardar resposta da função coordIP para obter os dados da latitude e longitude de acordo com o endereço de ip.

async function pegarLocal(lat, long) {
    try {
        const resposta = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accWeatherApiKey}&q=${lat}%2C%20${long}&language=pt-br`)
        data = await resposta.json();
        var localCode = data.Key;
        await pegarTempoAtual(localCode);


    } catch (error) {

        console.log('Erro na requisição')
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
//

