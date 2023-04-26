// Exercicio 1 OK
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
// Exercicio 3 : 

// var start = document.getElementById('comecar_parar');
// var parar = false;
// var cronometro;

// start.onclick = function(){
//     start.innerHTML = "Parar";
//     var seg = 0;
//     var min = 0;
//     var hr = 0;
//     var mili = 0;

//     cronometro = setInterval(function(){
//         mili++;
//         if(mili > 99){
//             mili = 0;
//             seg++;
//         }
//         if (seg > 59){
//             seg = 0;
//             min++;
//         } 
//         if (min > 59){
//             min = 0;
//             hr++;
//         }

//         document.getElementById('cronometro').innerHTML = `${hr}:${min}:${seg}:${mili}`;
//     },10);

// }

// document.getElementById('zerar').onclick = function(){
//     clearInterval(cronometro);
//     document.getElementById('cronometro').innerHTML = "00:00:00:00";
//     start.innerHTML = "Começar";
//     parar = true;
// }

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
