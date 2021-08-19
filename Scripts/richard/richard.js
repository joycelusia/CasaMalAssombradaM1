
var texto = document.getElementById("frase");
 var buttom = document.getElementById("botao");
 

  function n1(){
    var intervalo= setInterval(() => {
      
    
      var acao1 = prompt("Escolha por onde ir: \n1- Deixar a encomenda na porta\n2- Deixar a encomenda na biblioteca")
    
      
      if(acao1==1){
      texto.innerHTML="Muito obrigada, Richard! Bom trabalho. Da próxima vez, você poderia entrar pra tomar um café, que tal? ";
      buttom.value = "Jogar novamente"
      buttom.onclick = gameOverOver;  
      clearInterval(intervalo);  
      }
      else if (acao1==2){
        texto.innerHTML="Parece que faz muito tempo que ninguém lê um livro por aqui, não é? Não tem uma superfície sem poeira para que você possa deixar esse pacote. Talvez ali na mesa, junto com as outras caixas? É impressão minha ou essa encomenda se mexeu? ";
        return n2Biblioteca;
      
        
      }

    else{
      texto.innerHTML= "Digite escolha válida"
      return n1;
    
      }
   },3000);
  
  }

  
    function n2Biblioteca(){
      var intervalo= setInterval(() => {
      
      var acao1 = prompt("O que você quer fazer?\n 1 - Abrir o pacote\n 2 - Deixar a encomenda na mesa e ir embora")

      if(acao1 ==1){
        alert("Toc! Toc! Você pode achar que é só uma mão decepada se mexendo, mas esse é o Larry. Eu estava esperando ele há muito tempo. Parece que ele gostou de você… ")
        texto.innerHTML = "Larry agarra a mão de Richard e o puxa para dentro do pacote, que se lacra imediatamente. Será que ele vai sentir falta da luz do sol? ";
        buttom.value="Jogar novamente";
        buttom.onclick = gameOverOver;  
        clearInterval(intervalo); 
      }

      else if(acao1==2){
        texto.innerHTML = "Mas já? Tem certeza que não quer dar uma volta antes de seguir com o seu trabalho?";
        return decisao;
      }
      else{
        texto.innerHTML= "Digite opção válida";
        return n2Biblioteca;
      }
     }, 300);
    }


  
    function decisao(){
      var intervalo= setInterval(() => {
      var acao1 = prompt("1- Ir para sala \n 2-Ir embora")

      if(acao1==1){
        texto.innerHTML="Uma pausa me faria bem mesmo, o expediente já está terminando, ninguém vai se importar…";
        return gameOverPausa;
      }

      else if(acao1==2){
        texto.innerHTML=" Seria bom deixar isso aqui e ir logo descansar na minha própria casa…"
        return gameOverCasa;
      }

      else{
        texto.innerHTML= "Digite opção válida"
        return decisao;
      }
    }, 3000);  
  }

  
    function gameOverCasa(){
      var intervalo= setInterval(() => {
      texto.innerHTML = "Nada melhor que nosso próprio lar, não é? Mas eu prometo que aqui você pode se sentir em casa para sempre… quer dizer, sempre que quiser…"
      buttom.value="Jogar novamente";
      buttom.onclick = gameOverOver;  
      clearInterval(intervalo); 
      }, 3000);    
    }
  
  
   
  function gameOverPausa(){
    var intervalo= setInterval(() => {

    alert("Esse sofá é muito confortável! Você olha ao redor e percebe como é estranho um móvel tão novo no meio de tantos antigos… Parece que ele acabou de sair da loja. Mas… O que é isso, Richard? Seu cabelo não era branco quando você entrou aqui… E sua pele está… enrugando?")
    texto.innerHTML="O sofá suga a vitalidade de Richard até que só reste um esqueleto seco sentado no sofá com uma encomenda no colo. Bom, acho que o próximo carteiro que entrar aqui terá uma boa surpresa…";
    buttom.value="Jogar novamente";
    buttom.onclick = gameOverOver;  
    clearInterval(intervalo); 
    
   }, 3000);  
  }

function gameOverOver(){
    texto.innerHTML="GAME OVER";
    buttom.onclick=location.href = "../../index.html";
    
}