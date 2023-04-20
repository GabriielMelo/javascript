// Exercicios 
/* 1) Use a função para converter de Celsius para Fahrenheit feita no exercício 2. Só que desta vez, a temperatura em Celsius deve ser digitada pelo usuário no campo apropriado e o cálculo deve ser feito quando o botão "Calcular" for pressionado.

* Para pegar o valor do input de temperatura use .value em vez de .innerHTML */

/* document.getElementById('converter').onclick = 
function fahrenheit() {
    var celsius = document.getElementById("temp_celsius").value;
    var fahrenheit = (9 * celsius / 5) + 32;
    document.getElementById('temp_fahr').innerHTML = fahrenheit;
    
} */

/*  
2) Solte dentro do elemento abaixo 
uma lista de todos os anos em que houve a Copa 
do Mundo de Futebol, desde 1930 até 2018. Lembre-se 
que a copa do mundo ocorre de 4 em 4 anos.

*/
for ( var ano = 1926; ano < 2018; ano + 4){
    var copa = "<li>" + ano[i] + "</li>";
    document.getElementById("anos_copa").innerHTML = ano;
}    

/* for (var anos_copa = 1926; anos_copa < 2018;) {
    anos_copa += 4;
    document.getElementById('anos_copa').innerHTML = anos_copa;
} */

/* 3) Informe nos campos abaixo duas notas e o total de faltas do aluno e depois solte o resultado
 no local apropriado. Sendo que:

O aluno para ser aprovado precisa ter, 
no mínimo 70% de presença (o total de
     aulas é 20)
O aluno para ser aprovado precisa ter 
média maior ou igual a 6.5
Caso o aluno não seja aprovado, o programa precisa dizer se foi por motivo de média insuficiente, por faltas ou pelos dois motivos.

*/

/* var n1 = document.getElementById('nota1').value;
var n2 = document.getElementById('nota2').value;
var falta = document.getElementById('n_faltas').value;
var media = (n1+n2)/2;

if();

// id 'result'; */