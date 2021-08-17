function n1Text(){
  document.write("Seja bem-vindo, Michael! O que as pessoas têm postado por aí? Não acredite em tudo que eles falam… É sempre bom ver com seus próprios olhos!")
}

function n1Act(){
  var act1 = prompt("Escolha por onde ir: \n1 - Explorar a Sala das Estátuas \n 2 - Explorar o Porão\n 3-  Explorar Quarto Vermelho")

  if(act1 == 1){
    document.write("Biblioteca  "); 
   return n2Act();
    
  }
  else if (act1 == 2){
    document.write("Biblioteca ")
    
  }
  else if(act3==3){
    document.write("Porão - ")
  }
 else{
   alert("Digite escolha válida")
 }

}