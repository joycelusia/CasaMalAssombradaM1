function n1Text(){
  document.write("aconteceu isso e isso e isso e isso")
}

setTimeout(
  function n1Act(){
    var act1 = prompt("Escolha a ação do seu personagem: \n1- verde\n 2- roxo")

    if(act1 == 1){
      document.write("Você passou para o próximo nível"); 
      return n2Act();
      
    }
    else if (act1 == 2){
      document.write("Você passou para o próximo nível")
      
    }
   else{
     alert("Digite escolha válida")
   }
},3000)


setTimeout(
  function n2Act(){
  var act2 = prompt("Faça a segunda escolha do seu personagem: \n 1- cinza \n 2- azul")

  if (act2 == 1){
    document.write ("VOCÊ PERDEU")
    return location ("../HTML/gameover.html")
  }
  else if (act2 == 2){
    document.write ("Você passou para próxima fase")
    return n3Act();

  }
  else{
    document.write("Digite opção válida")
  }
},3000)

setTimeout(
  function n3Act(){
  
    if (act3 == 1){
      document.write ("Você ganhou o jogo!!")
      
    }
    else if (act3 == 2){
      
      document.write ("VOCÊ PERDEU")
      return location ("../HTML/gameover.html")
  
    }
    else{
      document.write("Digite opção válida")
    }
  })