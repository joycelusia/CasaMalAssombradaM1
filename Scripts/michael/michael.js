var texto = document.getElementById("frase");
var botao = document.getElementById("botao");

function n1Act(){
  var intervalo= setInterval(() => {
  var act1 = prompt("Escolha por onde ir: \n1- Procurar o relíquias no porão \n 2- Explorar Quarto Vermelho");

  if(act1==1){
   texto.innerHTML="Bom, se você desceu até aqui, deve saber muito bem o que quer, não é? O que alguém esconderia algo interessante em um porão como esse? É sempre bom ter cuidado com o que você procura… Mas olhe, uma pilha de documentos atrás daquela ratoeira! Será que está ali o que você quer? ";
   clearInterval(intervalo);
   return n2PoraoM();
    
  }
  else if (act1==2){
    texto.innerHTML="Toda casa tem seu quarto principal e aqui não é diferente. Temos uma grande cama confortável, um guarda-roupa de madeira maciça, uma janela grande com vista para o jardim… É uma pena que o tempo não tenha sido gentil com esse cômodo e todo o luxo tenha se transformado em mofo…";
    clearInterval(intervalo);
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

   if(act1==1){
     texto.innerHTML="Eu adoro um tour! Esse é meu lugar favorito aqui. Sinta todo esse cheiro de… criatividade! Essas máquinas demoraram muito tempo para serem criadas… Tudo em nome da ciência e do progresso. Doutor Charles é muito orgulhoso do seu trabalho!";
     clearInterval(intervalo);
     return charles();
   }
   else if(act1==2){
     alert("O que temos aqui? Prontuários médicos, certidões de nascimento, certidões de óbit… Todos assinados pelo Doutor Charles Montgomery. Nossa, esse homem deve trabalhar muito mesmo…");
     texto.innerHTML="Michael se vira e dá de cara com Charles. Ele veste um jaleco ensanguentado e segura um bisturi. Agarra Michael pelo pescoço e a prende em uma maca de dentista… Um tanto mais macabra, digamos. Vai ser um dia divertido por aqui!";
    botao.value="Jogar novamente";
    botao.onclick = gameOverOver();  
    clearInterval(intervalo);
   }
   else{
    texto.innerHTML= "Digite opção válida"
    return n2PoraoM();
    }
  }, 300); 
}

function charles(){
  var intervalo= setInterval(() => {
  var acao1 = prompt("CHARLES? 1- Quem? \n 2-Então é verdade? Preciso sair daqui AGORA!");

  if(acao1==1){
    alert("Você nunca ouviu falar do Doutor Charles Montgomery? Em que mundo você vive… Doutor Montgomery foi… Ah, é melhor você conhecê-lo pessoalmente… Olhe, bem atrás de você!");
    texto.innerHTML=" Michael se vira e dá de cara com Charles. Ele veste um jaleco ensanguentado e segura um bisturi. Agarra Michael pelo pescoço e a prende em uma maca de dentista… Um tanto mais macabra, digamos. Vai ser um dia divertido por aqui!";
    botao.value="Jogar novamente";
    botao.onclick = gameOverOver();  
    clearInterval(intervalo); 
  }

  else if(acao1==2){
    alert("Mas você já vai? E a? Você vai sair daqui com as mãos abanando? O que você vai postar hoje? Tem certeza que não quer gerar esse conteúdo?");
    texto.innerHTML="Michael consegue sair correndo da casa sem fotos e sem souvenirs. Tomara que ele logo poste um comentário e traga mais curiosos para cá!";
    botao.value="Jogar novamente";
    botao.onclick = gameOverOver();  
    clearInterval(intervalo); 
  }

  else{
    texto.innerHTML= "Digite opção válida"
    return charles();
    }
  }, 300);
}

function gameOverOver(){
  texto.innerHTML="GAME OVER";
  botao.onclick=location.href = "../../index.html";
}