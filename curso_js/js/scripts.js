/* Aula 3 Variaveis.
console.log('Hello Mundo!');
alert('Hello Mundo');

var latitude = 40.87663;
var longitude = -8.08373;


console.log(latitude); */

/* var nome = "João";  // podem ser usadas aspas duplas
    var sobrenome = 'Gomes';  // ou aspas simples
    var cpf = '111.111.111-11';  
    var telefone = "998887655";
    var ddd = '21';
    var email = 'joao@gmail.com';
    var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";
    
    console.log(nome + ' ' + sobrenome );
    console.log(`Nome completo : ${nome+' '+sobrenome}`);

    var teste = 65 < 60;

    console.log(teste);

         */

/* function soma_numeros() {
    var x = 5;
    var y = 2;
    var soma = x + y;
    console.log(soma);
}

soma_numeros()

function imc() {
    var peso = document.getElementById("peso").innerHTML
    var altura = document.getElementById("altura").innerHTML;
    var imc = peso / (altura*altura);
    document.getElementById("imc").innerHTML = imc;
    
}
imc(); */

/* var alunos = [ "João" , "Maria", "José" ];
var num_primos = [ 2, 3, 5, 7, 11, 13 ];

console.log(alunos.length);
console.log(num_primos[4]);

/* function kmToMiles(){
    var km = 5;
    var milhas = km * 0.621;
    console.log(milhas);
}
kmToMiles(); 

 var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 
 /* console.log(grupos[0],[1]); 
console.log(grupos.length); 
console.log(grupos.length); // consultando tamanho do array com o comando length
console.log(grupos[1]); // consultando indice 1 do array.
console.log(grupos[1][2]); */

/* var cursos = [ "HTML", "Python", "PHP" ];
Utilizando comandos push para inserir javascript ao final do array, e comando pop para removê-lo.
cursos.push("Javascript");
console.log(cursos); 
cursos.pop();
console.log(cursos);


var ingredientes = [ "pão branco", "queijo", "presunto" ];

ingredientes[0] = "Pão integral";

console.log(ingredientes);

utilizando slice

var alunos = [ "João" , "Maria", "José","Pedro","Marcos"];

console.log(alunos.slice(1,3));

//utilizando numeros negativos, a contagem de indices começa da direita para esquerda.
console.log(alunos.slice(-2,));


var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};
// para acessarmos o elemento de um objeto podemos inserir o nome do objeto e sua propriedade entre colchetes ou com ponto, exemplo : 

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

//Alterando valor da propriedade do objeto 
funcionario.cargo = "Gerente de T.I";
funcionario.cnh = "545464646";

console.log(funcionario);


// Arrays + Objetos

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];
//buscando categoria gestão do objeto Excel
console.log(cursos[2].categorias[1]);

// Alterando gestão para Administração de empresas.
cursos[2].categorias[1] = "Administração de empresas";
console.log(cursos[2].categorias[1]);


var aluno = {
    'nome': 'Maria',
    'sobrenome' : 'Pereira',
    'ano_nasc' : 1992,
    'idade' : function(){
        var idade = 2023 - this.ano_nasc;
        return idade;
    },
    'nome_completo': function () {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    }

};

console.log(`Nome do Aluno ${aluno.nome_completo()}`);
console.log(`Idade  ${aluno.idade()}`);

*/

// AULA 16 

// Evento Onclick

document.getElementById('click-me').onclick = function(){
    alert('Voce clicou no botão :)');
}
document.getElementById('hover-me').onmouseover = function(){
    alert('Você passou com o botão aqui :)');
}
document.getElementById('leave-me').onmouseout = function(){
    alert('Você saiu com o cursor do botão :)');
}
document.onkeydown = function(){
    alert('Voce apertou a tecla');
}


 