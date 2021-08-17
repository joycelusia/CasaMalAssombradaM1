function n1Text(){
  document.write(" Humn… Eu não estava esperando essa visita… Talvez você encontre alguma coisa por aqui. Mas terá que entrar para procurar.")
}

function n1Act(){
  var act1 = prompt("Escolha por onde ir: \n1- Procurar o documento na biblioteca \n 2- Procurar o documento no quarto vermelho\n 3 - Procurar o documento no porão")

  if(act1 == 1){
    document.write("Se você veio aqui procurar algum papel velho, aqui tem bastante coisa interessante para você… Talvez você encontre o que precisa e até algo mais  Por onde você quer começar?  "); 
   return n2Act();
    
  }
  else if (act1 == 2){  
    document.write("Toda casa tem seu quarto principal e aqui não é diferente. Temos uma grande cama confortável, uma penteadeira de madeira maciça, uma janela grande com vista pra o jardim… É uma pena que o tempo não tenha sido gentil com esse cômodo e todo o luxo tenha se transformado em mofo…")
    
  }
  else if(act3==3){
    document.write("Porão - ")
  }
 else{
   alert("Digite escolha válida")
 }

}