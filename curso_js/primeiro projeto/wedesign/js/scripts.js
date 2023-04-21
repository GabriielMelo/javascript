
// Menu Mobile

//hamburguer-icon
document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "0px";
}

document.getElementById("sliding-header-menu-close-button").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}
// adicionado cursor pointer ao botão.


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");
console.log(about_tags);

for (var i = 0; i < about_tags.length; i++){
  about_tags[i].onclick = function(){
    for(var j = 0; j < about_tags.length;j++){
      about_tags[j].style["background-color"] = unselected_color;
      about_tags[j].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletected_color;
    this.style["font-weight"] = "bold";

    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
  }
}



  // Slider de serviços

  var our_services = [
    {
      'title': 'Webdesign',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },

    {
      'title': 'Branding',
      'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
    },

    {
      'title': 'Marketing Digital',
      'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
    }

  ];
var servico_atual = 0;

document.getElementById("service-previous").onclick = function() {

    if(servico_atual == 0){
      var servico_anterior = our_services.length -1;
    } else {
      var servico_anterior = servico_atual -1;
    }

    document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
    document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;
    servico_atual = servico_anterior;


}

document.getElementById("service-next").onclick = function(){
  if(servico_atual == our_services.length -1){
    var servico_seguinte = 0;
  } else {
    var servico_seguinte = servico_atual + 1;
  }

  document.getElementById("service-title").innerHTML = our_services[servico_seguinte].title;
  document.getElementById("service-text").innerHTML = our_services[servico_seguinte].text;
  servico_atual = servico_seguinte;


}

// Data Footer
//current_year
var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
console.log(ano_atual)
document.getElementById("current_year").innerHTML = ano_atual;

//map

// AIzaSyDQOR0CPRfScKuirp-zXz3bN0RuC0iCsQI







