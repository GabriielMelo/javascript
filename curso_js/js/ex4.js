/* // Exercicio 1 OK
//Utilizando o evento onchange para salvar no local storage.
document.getElementById('estados'), onchange = function () {

    var estado = document.getElementById('estados').value;
    localStorage.setItem('estado', estado);
}
document.getElementById('estados').value = localStorage['estado'];

//----------------------------------------------

// Exercicio 2.

document.getElementById('confirmar_pedido').onclick = function () {

    var pedido = new Date();
    var pedido_dia = pedido.getDate();
    if (pedido_dia > 0 && pedido_dia < 9) {
        pedido_dia = "0" + pedido_dia.toString();
    }
    var pedido_mes = pedido.getMonth();
    if (pedido_mes > 0 && pedido_mes < 9) {
        pedido_mes = "0" + pedido_mes.toString();
    }
    var pedido_ano = pedido.getFullYear();
    pedido = pedido.getTime();
    var entrega = document.getElementById('envios').value;
   
    switch (entrega) {
        case "normal":
            pedido = pedido + (18 * 86400000);
            break;
        case "express":
            pedido = pedido + (12 * 86400000);
            break;
        case "escolha":
            alert ('Escolha uma forma de envio');
    }

    var data_entrega = new Date(pedido);
    var dia_entrega = data_entrega.getDate();
    if (dia_entrega > 0 && dia_entrega < 9) {
        dia_entrega = "0" + dia_entrega.toString();
    }
    var mes_entrega = data_entrega.getMonth();
    if (mes_entrega > 0 && mes_entrega < 9) {
        mes_entrega = "0" + mes_entrega.toString();
    }
    var ano_entrega = data_entrega.getFullYear();
    tipo_entrega = document.getElementById('envios').value;
    document.getElementById('data_pedido').innerHTML = `${pedido_dia}/${pedido_mes}/${pedido_ano} Entrega: ${tipo_entrega}`;
    document.getElementById('data_entrega').innerHTML = `${dia_entrega}/${mes_entrega}/${ano_entrega}`;

}

//----------------------------------------------





// Exercicio 4

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];
var valor_total = 0;

for (var i = 0; i < carros.length; i++) {


    switch (carros[i].categoria) {
        case '1':
            valor_total += 11.22;
            break;
        case '2':
            valor_total += 22.45;
            break;
        case '3':
            valor_total += 16.88;
            break;
        case '4':
            valor_total += 33.65;
            break;
        case '5':
            continue;
    }

}
document.getElementById('faturamento_total').innerHTML = valor_total.toFixed(2);
 */

// Exercicio 3 : 

var iniciado = false,hora_inicio,init_cronometro,hora_atual,tempo_passado,horas,minutos,segundos,milisegundos;

document.getElementById('comecar_parar').onclick = function (){
    if (!iniciado) { // exclamação testa se a condição é falsa
        iniciado = true;
        document.getElementById('comecar_parar').innerHTML = 'Parar';

        //Começar o cronometro
        if(!hora_inicio){
        hora_inicio = new Date().getTime();
    } else {
        hora_inicio = new Date().getTime() - tempo_passado;

    }

        init_cronometro = window.setInterval(function(){

            hora_atual = new Date().getTime()
            tempo_passado = hora_atual - hora_inicio;

            horas = Math.floor(tempo_passado/3600000);
            resto = tempo_passado - (horas * 36000000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000);

            segundos = Math.floor(resto/1000);
            resto -= (segundos * 1000);

            milisegundos = resto;

            document.getElementById('cronometro').innerHTML = `${add_zero(horas)}:${add_zero(minutos)}:${add_zero(segundos)} ${add_zero(milisegundos)}`

        },10);

    } else {
        window.clearInterval(init_cronometro);
        iniciado = false;
        document.getElementById('comecar_parar').innerHTML = 'Começar'
    }

}
document.getElementById('zerar').onclick = function() {
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    document.getElementById('cronometro').innerHTML = "00:00:00 000";
}

function add_zero(number){
    if (number <10){
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}