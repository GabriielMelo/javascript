/* // Exercicio 1. Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. Os ids das caixas são "num_1", "num_2" e "resultado". Para que o resultado saia em negrito, coloque-o dentro da tag <strong>.

var num1 = Number(document.getElementById('num_1').innerHTML);
var num2 = Number(document.getElementById('num_2').innerHTML);
resultado = num1+num2;
document.getElementById('resultado').innerHTML = '<strong>' + resultado + '</strong>';

// Exercicio 2 Crie uma função para converter graus Celsius para Fahrenheit, depois invoque a função usando o valor que está na caixa azul e solte o resultado na caixa amarela. Os ids são "caixa_azul" e "caixa_amarela".

function fahrenheit(){
    var celsius = Number(document.getElementById('caixa_azul').innerHTML);
    var fahrenheit =  (9 * celsius / 5) + 32;
    return fahrenheit;
}
document.getElementById('caixa_amarela').innerHTML = fahrenheit();

// Exercicio 3) Forme um novo array composto pelos 2 últimos elementos do array abaixo. Em seguida adicione ao final do novo array mais um grupo composto pelos alunos "Mariana", "Felipe" e "Carla".
 */
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

var novo_grupo = grupos[1] + "," + grupos[2];
console.log(novo_grupo);
novo_grupo.push('Mariana')
console.log(novo_grupo);