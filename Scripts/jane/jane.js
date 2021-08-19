var texto = document.getElementById("frase");
var buttom = document.getElementById("botao");

function n1(){
  var intervalo= setInterval(() => {
  var act1 = prompt("Escolha por onde ir: \n1- Procurar o documento na biblioteca \n 2- Procurar o documento no quarto vermelho")

    if(act1==1){
      texto.innerHTML="Se você veio aqui procurar algum papel velho, aqui tem bastante coisa interessante para você… Talvez você encontre o que precisa e até algo mais  Por onde você quer começar?  ";
      clearInterval(intervalo);
      return n2Biblioteca();
      
    }
    else if (act1==2){  
    texto.innerHTML="Toda casa tem seu quarto principal e aqui não é diferente. Temos uma grande cama confortável, uma penteadeira de madeira maciça, uma janela grande com vista pra o jardim… É uma pena que o tempo não tenha sido gentil com esse cômodo e todo o luxo tenha se transformado em mofo…";
    clearInterval(intervalo);  
    return n2Quarto();
      
    }
    
    else{
      alert("Digite escolha válida")
      return n1();
    }
  },300);  
}

function n2Biblioteca(){
  var intervalo= setInterval(() => {
  var acao1 = prompt("1- Mexer na estante \n 2 - Olhar em cima da mesa")

    if (acao1 ==1){
      texto.innerHTML="Temos grandes clássicos aqui! As traças realmente gostam de Edgar Allan Poe e Shirley Jackson. Digamos que é muito nutritivo... Você quer dar uma folheada? ";
      clearInterval(intervalo);
      return livros();
    }

    else if (acao1==2){
      texto.innerHTML="Essa mesa precisa de uma faxina… ";
      clearInterval(intervalo);
      return olharMesa();
    }
  }, 300);  
}

function livros(){
  var intervalo= setInterval(() => {
  var acao1 = prompt("Que livro você quer olhar?\n1- Folhear “Os Assassinatos na Rua Morgue”\n 2- Folhear “A Maldição da Casa da Colina” ")

    if(acao1==1){
      alert("Opa, esqueci de avisar que essa não é uma estante qualquer! Você quer dar uma espiadinha nessa sala secreta? Bom, agora você não tem escolha…");
      texto.innerHTML="Jane é empurrada para dentro da Sala Secreta e a entrada se fecha nas suas costas. Está tudo escuro, mas lá no fundo ela consegue ver alguns pontos brilhantes. Os pontos vão se aproximando e ela sente mãos tocarem o seu corpo. Ela poderia gritar agora, mas alguém ouviria?";
      buttom.value = "Jogar novamente"
      buttom.onclick = gameOverOver;  
      clearInterval(intervalo);  
      
    }

    else if(acao1==2){
      alert("Parece óbvio, não é? Às vezes a resposta está onde a gente realmente espera. Não é sempre, mas acontece. Você está feliz com a sua papelada?");
      texto.innerHTML=" No meio do livro, Jane encontra a escritura do imóvel. Esse é um final feliz? Eu não acho que alguém vá se interessar pelo terreno, mas boa sorte! Ela vai precisar....";
      buttom.value = "Jogar novamente"
      buttom.onclick = gameOverOver;  
      clearInterval(intervalo);  
      
    }

    else{
      texto.innerHTML="Digite ação válida";
      return livros()
    }
  }, 300);    
}

function olharMesa(){
  var intervalo= setInterval(() => {
  var acao1 = prompt("O que fazer? \n1- Abrir pacote \n 2 - Olhar pilha de papel")

  if(acao1==1){
    alert("Eu acho que já vi essa encomenda em algum lugar… Mas o que você fez? Abriu um pacote que não é seu? Dê um olá para o Larry, não seja mal educada!");
    texto.innerHTML="Eu acho que já vi essa encomenda em algum lugar… Mas o que você fez? Abriu um pacote que não é seu? Dê um olá para o Larry, não seja mal educada! "
    buttom.value = "Jogar novamente"
    buttom.onclick = gameOverOver;  
    clearInterval(intervalo);  
      
    }
    else if(acao1==2){
      alert("Contas não pagas, cartas não respondidas, panfletos antigos… Quanta coisa acumulada por aqui! Você folheia toda a pilha e encontra um bilhete: SEJA BEM-VINDA À SUA CASA POR TODA A ETERNIDADE");
      texto.innerHTML="GAMEOVER - A porta da biblioteca se fecha violentamente. Jane tenta correr para a janela, mas as paredes começam a se mover rapidamente, esmagando essa simples corretora de imóveis entre duas estantes";
      buttom.value="Jogar novamente"
      buttom.onclick = gameOverOver();  
      clearInterval(intervalo); 
    }
  }, 300); 
}

function gameOverOver(){
  texto.innerHTML="GAME OVER";
  buttom.onclick=location.href = "../../index.html";
}