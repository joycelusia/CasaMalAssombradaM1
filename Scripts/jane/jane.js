var texto = document.getElementById("frase");
var buttom = document.getElementById("botao");

function n1(){
  var act1 = prompt("Escolha por onde ir: \n1- Procurar o documento na biblioteca \n 2- Procurar o documento no quarto vermelho")

    if(act1==1){
      texto.innerHTML="Se você veio aqui procurar algum papel velho, aqui tem bastante coisa interessante para você… Talvez você encontre o que precisa e até algo mais  Por onde você quer começar?  "; 
    return n2Biblioteca();
      
    }
    else if (act1==2){  
    texto.innerHTML="Toda casa tem seu quarto principal e aqui não é diferente. Temos uma grande cama confortável, uma penteadeira de madeira maciça, uma janela grande com vista pra o jardim… É uma pena que o tempo não tenha sido gentil com esse cômodo e todo o luxo tenha se transformado em mofo…";
      return n2Quarto();
      
    }
    
    else{
      alert("Digite escolha válida")
      return n1();
    }

}

function n2Biblioteca(){
  var acao1 = prompt("1- Mexer na estante \n 2 - Olhar em cima da mesa")

    if (acao1 ==1){
      texto.innerHTML="Temos grandes clássicos aqui! As traças realmente gostam de Edgar Allan Poe e Shirley Jackson. Digamos que é muito nutritivo... Você quer dar uma folheada? ";
      return livros();
    }

    else if (acao1==2){
      texto.innerHTML="Essa mesa precisa de uma faxina… ";
      return olharMesa();
    }
}

function livros(){
  var acao1 = prompt("Que livro você quer olhar?\n1- Folhear “Os Assassinatos na Rua Morgue”\n 2- Folhear “A Maldição da Casa da Colina” ")

    if(acao1==1){
      texto.innerHTML="Opa, esqueci de avisar que essa não é uma estante qualquer! Você quer dar uma espiadinha nessa sala secreta? Bom, agora você não tem escolha…";
    }

    else if(acao1==2){
      texto.innerHTML="Parece óbvio, não é? Às vezes a resposta está onde a gente realmente espera. Não é sempre, mas acontece. Você está feliz com a sua papelada?";
    }

    else{
      texto.innerHTML="Digite ação válida";
      return livros();
    }
}

function olharMesa(){
  var acao1 = prompt("O que fazer? \n1- Abrir pacote \n 2 - Olhar pilha de papel")

  if(acao1==1){
    texto.innerHTML="Eu acho que já vi essa encomenda em algum lugar… Mas o que você fez? Abriu um pacote que não é seu? Dê um olá para o Larry, não seja mal educada! "
  }
}