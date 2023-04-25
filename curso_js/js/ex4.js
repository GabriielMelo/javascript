// Exercicio 1 OK
//Utilizando o evento onchange para salvar no local storage.
/* document.getElementById('estados'), onchange = function () {

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

*/