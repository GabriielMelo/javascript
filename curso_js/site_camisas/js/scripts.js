
// Objeto para pegar os preços e as fotos das camisetas


var camisetas = {
    'branca': {
        
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg' 
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg' 
            }
        }
    },
    
    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png' 
            }
        },
        
        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg' 
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg' 
            }
        }
    }
}


// parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 10,
    "cor": "colorida",
    "gola": "gola_v",
    "qualidade": "q150",
    "estampa": "com_estampa",
    "embalagem": "bulk"
}


// Regras adicionais para o orçamento:

// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. A camisa de qualidade alta (190g/m2) deve acrescer o preço unitário em 12%.

// 3. A embalagem unitária tem um custo de 0.15 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo: 
    // faixa 1: acima de 1.000 - Desconto de 15%
    // faixa 2: acima de 500 - Desconto de 10%
    // faixa 3: acima de 100 - Desconto de 5%



// Resolução do desafio:

subtotal = 0;

$(function(){
var unidade = 0;

    // Capturando quantidade ao alterar na pagina.
$("#quantidade").change(function(){
parametros_pesquisa.quantidade = $("#quantidade").val();
});
    
$("#branca").click(function(){
    parametros_pesquisa.cor = $("#branca").text();
   
})
$("#colorida").click(function(){
    parametros_pesquisa.cor = $("#colorida").text();
    
})

$("#gola_v").click(function(){
    parametros_pesquisa.gola = $("#gola_v").text();
})

$("#gola_normal").click(function(){
    parametros_pesquisa.gola = $("#gola_normal").text();
})

$("#q150").click(function(){
    parametros_pesquisa.qualidade = $("#q150").text();
    
})

$("#estampa").change(function(){ 
    parametros_pesquisa.estampa = $("#estampa").val();
})

console.log(unidade);
$("#embalagem").change(function(){
    var embalagem = $("#embalagem").val();
    parametros_pesquisa.embalagem = embalagem;
    if(embalagem == "bulk"){
        embalagem = 0;
    } else {
        embalagem = 0.15;
    }
    embalagem = parametros_pesquisa.quantidade * embalagem;
})

$("#q190").click(function(){
    var qualidade = $("#q190").text();
    parametros_pesquisa.qualidade = qualidade;
})

    






});

// if(parametros_pesquisa.cor === "branca" && parametros_pesquisa.gola === "gola_v" && parametros_pesquisa.estampa === "sem_estampa"){
//     unidade = 5.12;
// } else {
//     if (parametros_pesquisa.cor === "branca" && parametros_pesquisa.gola === "gola_normal" && parametros_pesquisa.estampa === "sem_estampa"){
//         unidade = 4.99;
//     } else {
//        if (parametros_pesquisa.cor === "branca" && parametros_pesquisa.gola === "gola_v" && parametros_pesquisa.estampa === "com_estampa"){
//             unidade = 8.95;
//     } else {
//         if(parametros_pesquisa.cor === "branca" && parametros_pesquisa.gola === "gola_normal" && parametros_pesquisa.estampa === "com_estampa"){
//             unidade = 8.77;
//         } else {
//             if (parametros_pesquisa.cor === "cor" && parametros_pesquisa.gola === "gola_v" && parametros_pesquisa.estampa === "sem_estampa"){
//                 unidade = 6.04;
//         } else {
//             if (parametros_pesquisa.cor === "cor" && parametros_pesquisa.gola === "gola_v" && parametros_pesquisa.estampa === "com_estampa"){
//                 unidade = 9.47;
//         } else {
//             if (parametros_pesquisa.cor === "cor" && parametros_pesquisa.gola === "gola_normal" && parametros_pesquisa.estampa === "sem_estampa"){
//                 unidade = 5.35;
//         } else {
//             if (parametros_pesquisa.cor === "cor" && parametros_pesquisa.gola === "gola_normal" && parametros_pesquisa.estampa === "com_estampa"){
//                 unidade = 9.28;
//         } else{
//             unidade = 0;
//      }
//                      }
//                  }
//             }
//             }
//      }
//     }
// }













// Sugestão de etapas da resolução

    // 1. Crie uma função para calcular o preço baseado nos parâmetros da variável "parametros_pesquisa" e solte o 
    // valor no console para testar se está certo.

    // 2. Faça os eventos click e change para os filtros.
    
        // a. Faça o evento click para os filtros do tipo botão (.option-filter). Sempre que houver um click, 
        // remova a classe "selected" dos botões do grupo e depois aplique-a apenas ao que foi clicado para
        // que ele fique azul.

        // b. Faça o evento change para os filtros do tipo <select> e para o <input> de quantidade.

        // c. Sempre que um dos eventos acima ocorrer, atualize a variável "parametros_pesquisa" e rode a função para 
        // calcular o preço

    
    // 3. Altere a função do cálculo do preço. Em vez de soltar os valores no console, atualize as informações
    // nos elementos "result_", atualize o preço no elemento "valor-total" e mude o atributo "src" do elemento 
    // "foto-produto" para alterar a imagem mostrada (todas as imagens estão na pasta img).

    // 4. Adicione a funcionalidade de hide e show do spinner (elemento "refresh-loader") à função de cálculo de preço. 
    // Como não estamos consultando dados externos, o cálculo acaba sendo rápido demais, portanto use um setTimeout 
    // para deixar ele aparecer por pelo menos 2 segundos.

    // 5. Crie a funcionalidade do localStorage e ao carregar a página, consulte o localStorage, 
    // atualize a variável "parametros_pesquisa" e rode a função de cálculo de preço