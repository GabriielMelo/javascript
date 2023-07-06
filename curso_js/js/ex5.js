
$(document).ready(function(){

//     function pegarPaises(callback){
//         $.ajax({
//             url: "https://restcountries.com/v3.1/all",
//             type: "GET",
//             dataType: "json",
            
//         }).done(function(data){
//            callback(data);
//         }).fail(function(){
//             console.log("Falha na requisição")
//         });

//     }
//     function popularPaises(paises){
//         for (var i = 0; i<paises.length;i++){
//             document.getElementById("paises").innerHTML += 
//             '<option value="' + paises[i].alpha3code + ' ">' + paises[i].name.official + '</option>'
//         }
//         console.log(paises);
//     }
// pegarPaises(popularPaises);


// var cursos = [
//     {
//         "titulo": "PHP",
//         "aval": []
//     },
//     {
//         "titulo": "Javascript",
//         "aval": [5,5,4.5,4,5,5,5,4.5]
//     },
//     {
//         "titulo": "Python",
//         "aval": [5,5,4,4,5,3,5,4,4,5]
//     },
//     {
//         "titulo": "Machine Learning",
//         "aval": [5,5,4.5]
//     }
// ];

// function mediaAval(lista_cursos){

//     for (var i = 0; i< lista_cursos.length; i++){

//         try {
//             if(lista_cursos[i].aval.length == 0){
//                 throw 'Curso' + lista_cursos[i].titulo + ' não possui avaliações'
//             } else if (lista_cursos[i].aval.length == 5){
//                 throw 'Curso' + lista_cursos[i].titulo + ' possui menos de 5 avaliações'
//             }
//             var soma = 0;
//             for (var j = 0; j < lista_cursos[i].aval.length;j++){
//                 soma += lista_cursos[i].aval;
//                 soma += lista_cursos[i].aval[j];
//             }
//                  var media = soma / lista_cursos[i].aval.length;
//                  console.log('Curso ' + lista_cursos[i].titulo  + ' tem a media de avaliações: ' + media.toFixed(2));
//         } catch(err){
//             console.log(err);
//         }


//     }

// }
// mediaAval(cursos);

// var userNamespace = {
//     'usuarios' : {
//         "33884h": "João Gomes",
//         "43585f": "Maria Luisa",
//         "93661h": "Pedro Henqrique",
//         "23172g": "Paula Carvalho",
//     },
//     'acessos': [
//         {
//             "usuario": "33884h",
//             "data": "10/07/18"
//         },
//         {
//             "usuario": "33884h",
//             "data": "11/07/18"
//         },
//         {
//             "usuario": "43585f",
//             "data": "19/07/18"
//         },
//         {
//             "usuario": "93661h",
//             "data": "24/07/18"
//         },
//         {
//             "usuario": "23172g",
//             "data": "13/08/18"
//         },
//         {
//             "usuario": "93661h",
//             "data": "14/08/18"
//         }
//     ],
//     'imprimir_acessos' : function(){
//         for (let i = 0; i < this.acessos.length;i++){
//             $("#acessos").append('<li> Acesso de ' + this.usuarios[this.acessos[i].usuario] +  ', no dia '+ this.acessos[i].data +'</li>')
//         }
//     }
// }

// userNamespace.imprimir_acessos();


function Shuffle(array){
    let counter = array.length;

    while (counter > 0){
        let index = Math.floor(Math.random()* counter);
        counter --
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}





function pegarPergunta(callback){
            $.ajax({
                url: "https://opentdb.com/api.php?amount=1&category=15",
                type: "GET",
                dataType: "json",
                
            }).done(function(data){
          callback(data.results[0]);
            }).fail(function(){
                console.log("Falha na requisição")
            });
        }

function gerarPergunta(pergunta){
    $("#pergunta").html(pergunta.question);
    var correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;
    respostas.push(correta);
    respostas = Shuffle(respostas);
   for (let i = 0; i<respostas.length;i++){
        $("#opcoes").append('<input type="radio" name="opcao" value="' +  respostas[i] + '">' + respostas[i] + '<br>')
   }
   $("#opcoes input[name ='opcao']").change(function(){
    $("#submeter").show();
   });
   $("#submeter").click(function(){
    var resposta_escolhida = $("#opcoes input[name='opcao']:checked").val();
    $("#submeter").hide();
    if(resposta_escolhida == correta){
        $("#resposta").html("<span style='color:green; font-weight: bold'> A resposta correta é: " + correta + " Parabéns, você acertou!"+" </span>");
    } else {
        $("#resposta").html("<span style='color:red; font-weight: bold'> A resposta correta é: " + correta + " Que pena, você errou!"+ " </span>");
    }
    $("#opcoes input[name ='opcao']").attr('disabled', true);


   })
}

{/*  value="resp1">  <br>  */}

pegarPergunta(gerarPergunta);


});

