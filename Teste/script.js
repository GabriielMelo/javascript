const apiKey = 'e602429d75ebd43e8cb241404952a540';

async function getIP(){
try{
    const resposta = await fetch('http://api.ipstack.com/check?access_key=e602429d75ebd43e8cb241404952a540');
    data = await resposta.json();
    console.log(data);
} catch {
    console.log('Erro requisição');
}
}
getIP();
