var texto = document.getElementById("frase");
var botao = document.getElementById("botao");

function n2Porao(){
  var act1 = prompt("Onde procurar documento? \n1 - Procurar na penteadeira \n 2 - Olhar debaixo da cama ")

  if (act1==1){
   texto.innerHTML= "Quantos frascos de perfume! As pessoas tomavam realmente banho com isso antigamente, não é? Mas parece que a dona não teve muito tempo para usufruir disso… "
   return n3Penteadeira();

  }

  else if(act1==2){
    alert("Nossa, você com certeza não assiste muitos filmes, não é? Essa nunca seria uma boa ideia…");
    texto.innerHTML= " Jane olha debaixo da cama. Ali outros olhos a encaram. Repentinamente, uma mulher esquelética vestida de noiva a puxa para debaixo da cama… Quanto tempo será que demora para a imobiliária sentir falta dela?"
    botao.value ="Jogar novamente"
    botao.onclick = gameOver();
  }
}

function n3Penteadeira(){
  var act1 = prompt("O que você quer fazer? \n1-Borrifar Perfume\n2-Procurar Gaveta")
}

function gameOver(){
  return location("../../index.html")
}