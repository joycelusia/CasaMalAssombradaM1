var texto = document.getElementById("frase");
var botao = document.getElementById("botao");

function n2QuartoV(){
  var act1 = prompt("O que você quer fazer? \n1 - Abrir o guarda-roupa  \n 2 - Olhar para o jardim")

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