// Escreva uma função reverseString que recebe uma string como argumento e retorna uma nova string com os caracteres invertidos.

var nome = 'Gabriel';
var cidade = 'São Paulo';
// a função 'split' divide as letras em um array, a 'reverse' inverte esse array e a 'join' reune o array.
const reverseString = (str)=>{

    formattedstr = str.split('').reverse().join('');
    console.log(formattedstr);

};

reverseString(cidade);

//Escreva uma função findMax que recebe um array de números como argumento e retorna o maior número no array.

var num = [2,7,5,8,50,6,3];

const findMax = (max) => {
    maior = 0;
    for (var i = 0; i<num.length;i++){
        if (num[i] > maior){
            maior = num[i];
        }
        
    }
    console.log(maior);
}
findMax(num);

 // Escreva uma função capitalizeWords que recebe uma string como argumento e retorna a mesma string com a primeira letra de cada palavra em maiúscula.

 var cidade = 'sao paulo';

 const capitalizeWords = (str) => {
    var words = str.split(' ');

   const UpperCaseWord  = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
   });
   return UpperCaseWord.join(' ');
 }


console.log(capitalizeWords(cidade));

const sumArray = (numero) => {
    var soma = 0;
    for (var i = 0; i<numero.length;i++){
    soma += numero[i];
    
    }
    return soma;
}
console.log(sumArray(num));

//Escreva uma função isPalindrome que recebe uma string como argumento e retorna true se a string for um palíndromo e false caso contrário.

var palavra = 'ANA';

const isPalindrome = (str) => {

   var palindromo = str.split('').reverse().join('');
   
   if (palindromo != str){
    return false;
   } else {
    return true;
   }

}
console.log(isPalindrome(palavra));

// Escreva uma função findDuplicates que recebe um array como argumento e retorna um novo array contendo apenas os elementos duplicados do array original.

var materias = ['portugues','matematica','matematica','portugues','ingles','informatica'];

const findDuplicates = (str) => {

    for ( var i = 0 ; i<str.length;i++){
        var duplicate = '';
        

    }

}