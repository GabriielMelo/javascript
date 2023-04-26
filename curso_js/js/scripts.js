/*   Aula 3 Variaveis.
console.log('Hello Mundo!');
alert('Hello Mundo');

var latitude = 40.87663;
var longitude = -8.08373;


console.log(latitude); 

 var nome = "João";   podem ser usadas aspas duplas
    var sobrenome = 'Gomes';   ou aspas simples
    var cpf = '111.111.111-11';  
    var telefone = "998887655";
    var ddd = '21';
    var email = 'joao@gmail.com';
    var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";
    
    console.log(nome + ' ' + sobrenome );
    console.log(`Nome completo : ${nome+' '+sobrenome}`);

    var teste = 65 < 60;

    console.log(teste);

         

 function soma_numeros() {
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
imc(); 

 var alunos = [ "João" , "Maria", "José" ];
var num_primos = [ 2, 3, 5, 7, 11, 13 ];

console.log(alunos.length);
console.log(num_primos[4]);

 function kmToMiles(){
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
  console.log(grupos[0],[1]); 
console.log(grupos.length); 
console.log(grupos.length);  consultando tamanho do array com o comando length
console.log(grupos[1]);  consultando indice 1 do array.
console.log(grupos[1][2]); 

 var cursos = [ "HTML", "Python", "PHP" ];
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

utilizando numeros negativos, a contagem de indices começa da direita para esquerda.
console.log(alunos.slice(-2,));


var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};
 para acessarmos o elemento de um objeto podemos inserir o nome do objeto e sua propriedade entre colchetes ou com ponto, exemplo : 

console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);

Alterando valor da propriedade do objeto 
funcionario.cargo = "Gerente de T.I";
funcionario.cnh = "545464646";

console.log(funcionario);


 Arrays + Objetos

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
buscando categoria gestão do objeto Excel
console.log(cursos[2].categorias[1]);

 Alterando gestão para Administração de empresas.
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



 AULA 16 

 Evento Onclick

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

 


 -- MANIPULANDO ELEMENTOS CSS 


var botao = document.getElementById('botao_cor');
botao.onclick = function () {
    botao.style.height = "100px";
    botao.style.color = "red";
    botao.style.background = "black"

     document.getElementById('botao_cor').style.height = "100px";
     document.getElemenyId('botao_cor').style.color = "red";
     document.getElementById('botao_cor').style.background = "black";

     this.style.color = "red";
    this.style["background-color"]= "black";
    this.style.height = "100px"; 

  
}; 

 var exemplo = document.getElementsByClassName('exemplo');

 exemplo[0].innerHTML = "teste1"

 Manipulando tags

 var exemplo = document.getElementsByTagName('p');

 exemplo[0].innerHTML = 'teste2';

 LOOPS FOR E FOR IN 

 LOOP FOR 

 for(var i = 0; i < 5; i++){
    console.log(i);
} 

var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

for( var i = 0; i< alunos.length; i++){
    console.log(alunos[i]);
} 

 LOOP FOR IN 

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'
} 
 o loop for in percorre mais facilmente objetos que não possuem indices em seus elementos, utilizamos a seguinte sintaxe;
 for (var prop in carro) {
    console.log(prop + " : " + carro[prop])
}

var elementos = document.getElementsByClassName('exemplo');

console.log(elementos);

for (var i = 0;i<elementos.length;i++){
    elementos[i].style.color = "red";
    elementos[i].style['font-weight'] = "bold";
} 

 While e Do While

 var count = 0;

while(count < 5 ) { 
    console.log(count);
    count++;
}  */

// Aula 24 BOM 

// Bowser Object Model.

// OnMouseMove

/* window.onmousemove = function(e){
    if(e.pageY < 5 ){
        alert('Não Fecha')
    }
} 

// Aula 25 Local Storage.

// window.localStorage.setItem('nome','João');

// console.log(localStorage['nome']);

// localStorage.removeItem('nome');

// nome-usuario 
// enviar-nome 




document.getElementById("enviar-nome").onclick = function(){
    //Guardar o nome em local storage
    var nome = document.getElementById('nome-usuario').value;
    localStorage.setItem('nome', nome);
    
// Esconder Formulário 
    document.getElementById('name-field').style.display = 'none';
    document.getElementById('welcome-area').style.display = 'initial';
//Exibir mensagem oculta.

    document.getElementById('welcome-text').innerHTML = `Olá ${localStorage.nome}, tudo bem?`;
    document.getElementById('not-me').innerHTML = `Não é ${localStorage.nome}?`;   
};

if (localStorage.nome){
    document.getElementById('name-field').style.display = 'none';
    document.getElementById('welcome-text').innerHTML = `Olá ${localStorage.nome}, tudo bem?`;
    document.getElementById('not-me').innerHTML = `Não é ${localStorage.nome}?`;  
    document.getElementById('welcome-area').style.display = 'initial';
    
};

document.getElementById('not-me').onclick = function(){
    // Removendo nome do local storage
    localStorage.removeItem('nome');
    //escondendo frase de boas vindas
    document.getElementById('welcome-area').style.display = 'none';
    //exibindo formulario.
    document.getElementById('name-field').style.display = 'initial';
}



// Objeto Data 

var data_hoje = new Date();

console.log(data_hoje.getDate());

var data_nasc = "1980/03/01";

var ano_nascimento = new Date('"1980/03/01"').getFullYear();
var ano_atual = new Date().getFullYear();
var idade = ano_atual - ano_nascimento;

console.log(idade);

var data = new Date();

data = data.getTime()/ 31536000000;


console.log(data);  */

/* Desafio: Cálculo de intervalo de datas
Se um produto foi enviado no dia 20 Março de 2018 e entregue no dia 06 de Abril de 2018, quantos dias o produto levou para ser entregue?

Tempo de entrega: solte aqui (id="dias_entrega")

var envio = new Date("2018/03/20");
envio = envio.getTime();
var receb = new Date("2018/04/06");
receb = receb.getTime();
var dias = (receb - envio) / 86400000;

console.log(dias);

document.getElementById('dias_entrega').innerHTML = `Entrega ocorreu em ${dias} Dias`


// Metodos de tempo.  Atrasando execução de funcões utilizando o metodo setTimeout

console.log('mensagem 1 ');
// os argumentos devem ser na sequencia : funcao a ser executada, tempo a ser atrasado.
window.setTimeout(function () {
    console.log('mensagem 2');
}, 3000);

// valor é passado em milisegundos. 3000 = 3 segundos.


// mostrar-loader 
//spinner-loader

/* window.setTimeout(document.getElementById('mostrar-loader ').onclick = function(){
    document.getElementById('spinner-loader').style.display = 'initial';
}, 5000) 


 // utilizando set timeout para controlar o tempo de animação do loader : 


document.getElementById('mostrar-loader').onclick = function(){

    document.getElementById('spinner-loader').style.display = "initial";
    window.setTimeout(function(){
        document.getElementById('spinner-loader').style.display = "none";
    },5000)
}

// Utilizando o Metodo setInterval
// este metodo repete a execução da função de acordo com o tempo .

var count = 0;

window.setInterval(function(){
    console.log(count);
    count++
   
},1000)


// metodo setInterval se repete eternamente, para ser interrompido podemos definir uma condição e utilizar o método ClearInterval, para que seja interrompido, atribuimos o valor a uma variável para que seja inserido ao método para controle.  

var count = 0;
var inter = window.setInterval(function(){
    console.log(count);
    count++;
    if(count > 10){
        window.clearInterval(inter);
    }
},1000);


// id 'relogio'


var rodarRelogio = window.setInterval(function () {
    // Atribuindo data atual a variavel relogio 
    var relogio = new Date();
    // Pegando cada valor de hora, minuto e segundo.
    hora = relogio.getHours();
    minuto = relogio.getMinutes();
    segundo = relogio.getSeconds();

    // Convertendo valor para String, condição  para adicionar 0 a esquerda caso numero seja menor que 9 e maior que 0;
    function formated_time(time){
        if(time >=0 && time <=9){
            var formated_time = "0" + time.toString();
        } else {
            var formated_time = time.toString();
        }
        return formated_time;
    }
    // Enviando infomação de data para o ID da pagina.
    document.getElementById('relogio').innerHTML = `${formated_time(hora)}:${formated_time(minuto)}:${formated_time(segundo)}`;

},1000); // Atualizado a cada 1 seg.


 // COMANDO SWITCH CASE.

// Utilizado quando se busca um valor mais específico.

function valor_pedagio(categoria){

        switch(categoria){
            case "1":
                return 11.22;
                break;
            case "2":
                return 22.45;
                break;
            case "3":
                return 16.88;
                break;
            case "4":
                return 33.65;
                break;
           default: 
                return "Categoria não encontrada."
        }
}

var categoria_veículo = "3";

console.log(valor_pedagio(categoria_veículo));

// COMANDO BREAK E CONTINUE.

var x = 0;

// while (x<10){
//     console.log(x)
//     x++;
//     // Comando Break
//     if( x == 5 ){
//         break
//     }
// }

// var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

// // for (i = 0; i < lista.length;i++){
// //     if (lista[i] == 33){
// //         console.log(`Valor ${lista[i]} encontrado `);
// //         break

// //     }
// //      console.log (`Tentativa ${i+1}`);
// // }




    var num = 0;
    while ( num < 20){

    // comando continue irá pular o indice e não irá imprimir no console.     
    if( num == 3 ){
        num++;
        continue
    }
    console.log(num);
    num++
    }

*/

// FORMULARIOS

//id "Options" "Mostrar_opcao"

// document.getElementById('mostrar_opcao').onclick = function(){
//     var campo_select = document.getElementById('options');
//     var indice_selecionado = campo_select.options.selectedIndex;
//     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
//   document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
// }

/* var valor_selecionado = document.getElementById("options").value;
document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;

 

// radio buttons
// diferente do input anterior, radio não possuem opcões são 3 campos diferentes, neste caso é necessário fazer um loop para encontrar a opção que foi selecionada. 


document.getElementById("mostrar_radio").onclick = function () {

    var radio = document.getElementsByName('genero');

    var radio_selected;

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio_selected = radio[i].value;break;
        }
    }

document.getElementById('radio_selecionado').innerHTML = radio_selected;
}; 


// CheckBoxes
// o input Checkboxes permite mais de uma seleção ao mesmo tempo, sendo assim iremos utilizar um loop e salvar em uma variavel, vamos soltar na pagina as opções que estão com checked em modelo de lista.


document.getElementById('mostrar_check').onclick = () => {
    document.getElementById("check_selecionado").innerHTML= "";
    var check = document.getElementsByName("interesse");

    for (i = 0; i < check.length; i++) {
        if (check[i].checked){
            document.getElementById("check_selecionado").innerHTML+= '<li>' + check[i].value + '</li>'
        }
    }

}


//  INPUT DATE 

//neste input, salvamos o valor em uma variavel que irá nos gerar um string com a data no formato YYYY/MM/DD, em seguida iremos criar uma variavel com a data completa e nela instanciar um objeto Date. em seguida podemos jogar diretamente no campo id ou se desejarmos apenas a data, utilizar os metodos de extrair dia, mes e ano e jogar conforme desejarmos.

document.getElementById("mostrar_data").onclick = () => {

    var data_select = document.getElementById("data_evento").value;
    console.log(data_select);
    data_completa = new Date(data_select);
    document.getElementById('data_selecionada').innerHTML = data_completa
}



// EVENTO ON CHANGE
// evento irá exibir o campo ao ser selecionado, não sendo necessário clicar para gerar a ação.

document.getElementById("escolaridade").onchange = function () {

    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

};

           


// Onchange com check boxes :
//para cada passagem do loop será necessário criar um evento onchange.

var check = document.getElementsByName("lanche");

for (var a = 0;  a < check.length; a++) {

    check[a].onchange = function () {

        document.getElementById("check_selecionado").innerHTML = "";
        
        for (var b = 0;  b < check.length; b++) {
            
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }  
}

*/

// JQuery - Introdução .

// Vanilla JS : Javascript puro 

// Aula 34 Sintaxe 
//Vanilla Javascript 
/* document.getElementById("exemplo").innerHTML = "ola";
//jQuery : 
$("#exemplo").html("Olá"); */

//utilizamos o cifrão para mencionar o campo que será editado, a notação segue igualmente ao css, # para ID, . para classe e tag para todas as tags, ex : div irá algerar todas divs.

//Escondendo elementos com jQuery 

// $("#esconder").click(function(){
//     $(".exemplo").css("display","none");
// });

// o evento onclick se tornou click e para mencionar o campo css o mesmo deve ser passado como css (propriedade,valor);

// ou 

$( "#esconder" ).click(function() {
    $(".exemplo").hide();
});

// Há certos métodos para facilitar, como o hide que irá esconder o elemento selecionado no campo $.