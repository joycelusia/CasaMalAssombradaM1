var texto = document.getElementById("frase");
var botao = document.getElementById("botao");

function n1Act(){
  var intervalo= setInterval(() => {
  var act1 = prompt("Escolha por onde ir: \n1 - Procurar o relíquias no porão \n 2 - Explorar Quarto Vermelho")

  if(act1 == 1){
   texto.innerHTML="Bom, se você desceu até aqui, deve saber muito bem o que quer, não é? O que alguém esconderia algo interessante em um porão como esse? É sempre bom ter cuidado com o que você procura… Mas olhe, uma pilha de documentos atrás daquela ratoeira! Será que está ali o que você quer? ";
   return n2Porao();
    
  }
  else if (act1 == 2){
    texto.innerHTML="Toda casa tem seu quarto principal e aqui não é diferente. Temos uma grande cama confortável, um guarda-roupa de madeira maciça, uma janela grande com vista para o jardim… É uma pena que o tempo não tenha sido gentil com esse cômodo e todo o luxo tenha se transformado em mofo…";
    return n2QuartoV();
  }

 else{
   alert("Digite escolha válida")
   return n1Act();
    
  }
  }, 300); 
}

 function n2PoraoM(){
  var intervalo= setInterval(() => {
   var act1 = prompt("1- Dar uma volta pelo ambiente \n2- Ver pilha de documentos ")

   if(act1==2){
     texto.innerHTML="Eu adoro um tour! Esse é meu lugar favorito aqui. Sinta todo esse cheiro de… criatividade! Essas máquinas demoraram muito tempo para serem criadas… Tudo em nome da ciência e do progresso. Doutor Charles é muito orgulhoso do seu trabalho!"
   }
   else if(act1==2){
     texto.innerHTML="  "
   }
  }, 300); 
}

function gameOverOver(){
  return location.href = "../../index.html"
}