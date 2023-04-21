// Exercicio 1 
document.getElementById('converter').onclick =
    function fahrenheit() {
        var celsius = document.getElementById("temp_celsius").value;
        var fahrenheit = (9 * celsius / 5) + 32;
        document.getElementById('temp_fahr').innerHTML = fahrenheit;
    }

//Exercicio 2

for (var anos_copa = 1926; anos_copa <= 2018; anos_copa += 4) {
    document.getElementById('anos_copa').innerHTML += '<li>' + anos_copa + '</li>';
}

// Exercicio 3.

document.getElementById('calcular').onclick = function () {
    var n1 = Number(document.getElementById('nota1').value);
    var n2 = Number(document.getElementById('nota2').value);
    var faltas = document.getElementById('n_faltas').value;
    var media = (n1 + n2) / 2;
    var res = "";
    if (faltas > 14) {
        res = "Aluno Reprovado"
    } else {
        if (media < 6.5) {
            res = "Aluno Reprovado"
        } else {
            res = "Aluno Aprovado"
        }
    }
    document.getElementById('result').innerHTML = res;
}

// Exercicio 4.

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null

    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'

    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null

    },
]
// CORREÇÃO
var total_vendas = 0;


for (i = 0; i < vendas_cursos.length; i++) {
    if (vendas_cursos[i].reembolso == null) {
        total_vendas += vendas_cursos[i].valor;
        var linhaHTML = "";
        linhaHTML += '<tr>'
        linhaHTML += '<td>' + vendas_cursos[i].aluno + '</td>'
        linhaHTML += '<td>' + vendas_cursos[i].data + '</td>'
        linhaHTML += '<td>' + vendas_cursos[i].valor + '</td>'
        linhaHTML += '</tr>'

        document.getElementById('vendas_cursos').innerHTML += linhaHTML;
    }
}
document.getElementById('total_vendas').innerHTML = total_vendas;









/* INCORRETO
 function relatorio(vendas_cursos) {
    var total_vendas = 0;
    for(i=0;i<vendas_cursos.length;i++){
        if(vendas_cursos.reembolso != null){
            vendas_cursos.slice(i)
        }
    total_vendas += vendas_cursos.valor[i];
    var tabela = '<td>'+vendas_cursos.aluno[i]+'</td>'; 
    tabela += '<td>'+vendas_cursos.data+'</td>'; 
    tabela += '<td>'+vendas_cursos.valor[i]+'</td>'; 
    return tabela;
}
}
var tabela_c = relatotio(vendas_cursos);
var total = vendas.cursos.total_vendas;

document.getElementById('vendas_cursos').innerHTML = tabela_c;
document.getElementById('total_vendas').innerHTML = total;
 
*/