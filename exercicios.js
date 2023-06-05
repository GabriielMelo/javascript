// Crie uma função que recebe um array de números como parâmetro e retorne a soma de todos os elementos.

// var num = [1,2,5,3,6,9,7,2,3];

// const sum = num =>{
//     var soma = 0;
//     for ( var i = 0; i<=num.length;i++){
//         soma += i;
//     }
//     return soma
// }
// console.log(`A soma do array é : ${sum(num)}`);

// Crie uma função que recebe um array de palavras como parâmetro e retorne um novo array contendo somente as palavras que possuem mais de 5 caracteres.

// var frutas = ['abacaxi','manga','banana','melancia','maça','jabuticaba'];

// const caracteres = str =>{
//     novoFrutas = [];
//     for (var i = 0; i<str.length;i++){
//     if ( str[i].length > 5){
//         novoFrutas.push(str[i])
//     } 
   
// }

    
//     return novoFrutas;

// }

// console.log(`As seguintes frutas possuem mais de 5 caracteres : ${caracteres(frutas)}`);


// Crie uma função que recebe um número como parâmetro e verifica se é um número primo. Retorne true se for primo e false caso contrário.

// var numero = 6;

// const primo = num =>{
//     var div = 0;
//     var res ='';
//     for ( var i = 1; i<=num ;i++){
//         if (num % i === 0){
//             div++
//         }
//     }
//     if (div === 2){
//         res = `O numero ${num} é Primo.`
//     } else {
//         res = `O numero ${num} não é Primo`
//     }

//     console.log(div);
//     return res;
// }

// console.log(primo(numero));

// Crie uma função que recebe um array de objetos representando produtos, onde cada objeto possui um nome e um preço. A função deve retornar o nome do produto mais caro.

// var jogos = [
//     {
//         'nome' : 'Zelda tears Of the Kingdom',
//         'preco': 359.00
//     },  
//     {
//         'nome' : 'Splatoon 3',
//         'preco': 299.00
//     },
//     {
//         'nome' : 'Mario Kart 8 Deluxe',
//         'preco': 259.00
//     }
// ]

// const verValor = arr =>{
//     maior = arr[0];
    
//     for (var i = 0; i<arr.length;i++){
//         if (arr[i].preco > maior.preco)
//         maior = arr[i];
//     }
//     return maior;

// }
// console.log(verValor(jogos));


// Crie uma função que recebe uma string como parâmetro e retorne outra string com as palavras em ordem reversa. Por exemplo, para a string "Olá, mundo!" o retorno seria "mundo! Olá,".

// var nome = 'Ola Mundo';

// const inv = str =>{
//     invert = '';
//     invert = str.split('').reverse().join();
       
//     return invert;

// }
// console.log(inv(nome));

// Temos um grupo de pessoas, escreva um programa que leia o sexo e altura de cada pessoa, calcule e mostre a altura media das mulheres e dos homens separadamente. Utilize o comando repetição que desejar;

var pessoas = [
    {
    'sexo': 'M',
    'altura': 170
},
{
    'sexo': 'M',
    'altura': 180
},
{
    'sexo': 'M',
    'altura': 165
},
{
    'sexo': 'F',
    'altura': 165
},
{
    'sexo': 'F',
    'altura': 189
},
{
    'sexo': 'F',
    'altura': 150
},
]

const calcAlt = arr =>{
   var mediaF = 0;
   var mediaM = 0;
   var countM = 0;
   var countF = 0;

    for (var i = 0; i<arr.length;i++){
        if (arr[i].sexo === 'M'){
            mediaM += arr[i].altura
            countM++;
        } else {
            if (arr[i].sexo === 'F' ){
                mediaF += arr[i].altura
                countF++;
            }
        }
    }
    mediaF = mediaF/countF;
    mediaM = mediaM/countM;
    return console.log(`A média de altura masculina é de ${mediaM.toFixed(2)} e da feminina é ${mediaF.toFixed(2)} `);
}

calcAlt(pessoas);