
var texto = document.getElementById("frase");
 var buttom = document.getElementById("botao");
 

 function n1(){
   console.log("Funcionando");
    var acao1 = prompt("Escolha por onde ir: \n1- Deixar a encomenda na porta\n2- Deixar a encomenda na biblioteca\n3- Deixar a encomenda na sala ")
   
    
    if(acao1 == 1){
     texto.innerHTML="<p>Muito obrigada, Richard! Bom trabalho. Da próxima vez, você poderia entrar pra tomar um café, que tal? </p>" 
     buttom.onclick = location.href("../HTML/game.html");
      
      
      
    }
    else if (acao1 == 2){
      texto.innerHTML="Parece que faz muito tempo que ninguém lê um livro por aqui, não é? Não tem uma superfície sem poeira para que você possa deixar esse pacote. Talvez ali na mesa, junto com as outras caixas? É impressão minha ou essa encomenda se mexeu? "
     
      
    }

    else if(acao1==3){
      texto.innerHTML="Esse lugar estava realmente precisando de uma visita, por que você não senta e descansa um pouquinho? Esse sofá parece muito aconchega"
    }
   else{
     texto.innerHTML= "Digite escolha válida"
  
   }

  }