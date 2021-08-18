
var texto = document.getElementById("frase");
 var buttom = document.getElementById("botao");
 

 function n1(){
    var acao1 = prompt("Escolha por onde ir: \n1- Deixar a encomenda na porta\n2- Deixar a encomenda na biblioteca")
   
    
    if(acao1 == 1){
     texto.innerHTML="Muito obrigada, Richard! Bom trabalho. Da próxima vez, você poderia entrar pra tomar um café, que tal? " 
     buttom.onclick = location.href("../HTML/game.html");
      
      
      
    }
    else if (acao1 == 2){
      texto.innerHTML="Parece que faz muito tempo que ninguém lê um livro por aqui, não é? Não tem uma superfície sem poeira para que você possa deixar esse pacote. Talvez ali na mesa, junto com as outras caixas? É impressão minha ou essa encomenda se mexeu? "
      return n2Biblioteca();
     
      
    }

   else{
     texto.innerHTML= "Digite escolha válida"
  
   }

  }

  function n2Biblioteca(){
    var acao1 = prompt("O que você quer fazer?\n 1 - Abrir o pacote\n 2 - Deixar a encomenda na mesa e ir embora")

    if(acao1 ==1){
      texto.innerHTML= "Toc! Toc! Você pode achar que é só uma mão decepada se mexendo, mas esse é o Larry. Eu estava esperando ele há muito tempo. Parece que ele gostou de você… "
      return gameOverBiblioteca();
    }

    else if(acao1 ==2){
      texto.innerHTML = "Mas já? Tem certeza que não quer dar uma volta antes de seguir com o seu trabalho?"
      return decisao();
    }
    else{
      texto.innerHTML= "Digite opção válida"
    }
  }

  function decisao(){
    var acao1 = prompt("1- Ir para sala \n 2-Ir embora")

     if(acao1==1){
      texto.innerHTML="Uma pausa me faria bem mesmo, o expediente já está terminando, ninguém vai se importar…"
      return gameOverPausa();
    }

    else if(acao1==2){
      texto.innerHTML=" Seria bom deixar isso aqui e ir logo descansar na minha própria casa…"
      return gameOverCasa();
    }

    else{
      texto.innerHTML= "Digite opção válida"
    }
  }

  function gameOverPausa(){

    texto.innerHTML = "Nada melhor que nosso próprio lar, não é? Mas eu prometo que aqui você pode se sentir em casa para sempre… quer dizer, sempre que quiser…"
  }
  
  
  function gameOverCasa(){
  
    texto.inner =   "Esse sofá é muito confortável! Você olha ao redor e percebe como é estranho um móvel tão novo no meio de tantos antigos… Parece que ele acabou de sair da loja. Mas… O que é isso, Richard? Seu cabelo não era branco quando você entrou aqui… E sua pele está… enrugando?"
  }

