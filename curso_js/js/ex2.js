// Exercicio 1. Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. Os ids das caixas são "num_1", "num_2" e "resultado". Para que o resultado saia em negrito, coloque-o dentro da tag <strong>.

var num1 = Number(document.getElementById('num_1').innerHTML);
var num2 = Number(document.getElementById('num_2').innerHTML);
resultado = num1 + num2;
document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';

// Exercicio 2 Crie uma função para converter graus Celsius para Fahrenheit, depois invoque a função usando o valor que está na caixa azul e solte o resultado na caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".

function fahrenheit() {
    var celsius = Number(document.getElementById('caixa_azul').innerHTML);
    var fahrenheit = (9 * celsius / 5) + 32;
    return fahrenheit;
}
document.getElementById('caixa_amarela').innerHTML = fahrenheit();

// Exercicio 3) Forme um novo array composto pelos 2 últimos elementos do array abaixo. Em seguida adicione ao final do novo array mais um grupo composto pelos alunos "Mariana", "Felipe" e "Carla".

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];

var n_grupo = [
    grupos[1], grupos[2]
];
console.log(n_grupo)
n_grupo.push(['Mariana', 'Felipe', 'Carla']);
console.log(n_grupo[2]);

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    't_aval': function () {
        t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas +
            this.n_aval_3_estrelas + this.n_aval_2_estrelas +
            this.n_aval_1_estrela;
        return t_aval;
    },
    'media_aval': function () {
        media_aval = ((5 * 420) + (4 * 80) + (3 * 33) + (2 * 20) + (1 * 4)) / (420 + 80 + 33 + 20 + 4);
        return media_aval;
    }
}
document.getElementById('categoria_principal').innerHTML = curso.categoria[0];

document.getElementById('total_aval').innerHTML = curso.t_aval();
document.getElementById('media_aval').innerHTML = curso.media_aval().toFixed(2);

var cadastro = {
    'nome': "Gabriel Jesus Melo",
    'sobrenome': "Melo",
    'email': 'gmelo@teste.com'
};
function c_tabela(cadastro) {
    var tabelaHTML = '<div class="tableBox">';
    tabelaHTML += '<table>';
    tabelaHTML += '<tr>';
    tabelaHTML += '<th>Nome Completo</th>';
    tabelaHTML += '<th>Email</th>';
    tabelaHTML += '</tr>';
    tabelaHTML += '<tr>';
    tabelaHTML += '<td>'+ cadastro.nome+ " "+ cadastro.sobrenome, '</td>';
    tabelaHTML += '<td>'+cadastro.email+'</td>';
    tabelaHTML += '</tr>';
    tabelaHTML += '</table>';
    tabelaHTML += '</div>';
    return tabelaHTML;
}
var tabela = c_tabela(cadastro);

document.getElementById('tabela').innerHTML = tabela;