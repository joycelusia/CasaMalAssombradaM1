var texto = document.getElementById("frase");
var botao = document.getElementById("botao");


function n2Quarto(){
  var intervalo= setInterval(() => {
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
  },300);  
}

function n3Penteadeira(){
  var intervalo= setInterval(() => {
  var act1 = prompt("O que você quer fazer? \n1-Borrifar Perfume\n2-Procurar Gaveta")

  if(act1==1){
    alert("Ninguém resiste a essa fragrância inebriante! Ninguém mesmo, sem exagero! Você deveria ter mais cuidado ao mexer no que não é seu… ");
    texto.innerHTML=" Jane começa a tossir e se engasga com o cheiro do perfume. Sua garganta se fecha e ela não consegue respirar. Seu corpo vai cedendo até que ela cai no tapete persa do quarto."
    botao.value= "Jogar novamente"
    botao.onclick = gameOver();
  }

  else if(act==2){
    alert("Olha, por essa eu não esperava! Acho que não era isso que você estava procurando exatamente, mas deve servir para alguma coisa…")
    texto.innerHTML=" Jane encontra um testamento que transfere a posse da propriedade para quem o encontrar. O que ela vai fazer com essa casa? Não sei, mas estou bastante curioso…";
    }
  }, 300);
}

function gameOverOver(){
  return location.href="../../index.html"
}