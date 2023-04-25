// Exercicio 1 OK

/* document.getElementById('estados'), onchange = function () {

    var estado = document.getElementById('estados').value;
    localStorage.setItem('estado', estado);
}
document.getElementById('estados').value = localStorage['estado'];
 */
//----------------------------------------------

// Exercicio 2.

document.getElementById('confirmar_pedido').onclick = function () {

    var pedido = new Date();
    pedido = pedido.getTime();

    var entrega_express = 12 * 86400000;
    var entrega_normal = 18 * 86400000;
    var entrega = document.getElementById('envios').value;
    switch(entrega){
        case "normal" : 
        pedido += entrega_normal
        break;
        case "express" : 
        pedido += entrega_express;
        break;
    }
    var data_entrega = new Date(pedido);
    
    console.log(dia_entrega);
}