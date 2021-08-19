alert("Passe o mouse no nome dos personagens para descobrir seu objetivo");

function escolha(){
  var personagem =  prompt("Escolha o personagem: \n1- Richard \n2- Jane\n3- Michael");
  
  if(personagem == 1){
    return location = ("../HTML/richard/richard.html")
  }

  else if (personagem == 2){
    return location = ("../HTML/jane/jane.html")
  }

  else if (personagem == 3){
    return location = ("../HTML/michael/michael.html")
  }

  else{
    alert("Escolha um número de personagem válido!")
   
  }
}