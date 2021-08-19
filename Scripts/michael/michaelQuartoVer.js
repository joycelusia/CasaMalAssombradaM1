var texto = document.getElementById("frase");
var botao = document.getElementById("botao");

function n2QuartoV(){
  var intervalo= setInterval(() => {
  var act1 = prompt("O que você quer fazer? \n1 - Abrir o guarda-roupa  \n 2 - Olhar para o jardim")

  if(act1 == 1){
    alert("Você vê uma ampla coleção de roupas antigas. Mas seus olhos brilham ao ver um paletó impecável e (olhe que coincidência!) é do seu tamanho! Vamos, experimente!");
    texto.innerHTML="Michael prova o paletó. O caimento é perfeito no corpo dele, como se um alfaiate tivesse feito sob medida… Mas, a roupa começa a encolher pouco a pouco. Michael tenta abrir os botões, mas suas mãos já estão roxas. Ele caí no chão e permanece ali, sem ar e sem fotos para postar nas redes sociais.";
    buttom.value = "Jogar novamente"
    buttom.onclick = gameOverOver;  
    clearInterval(intervalo);  
     }

  else if (act1 == 2){
    texto.innerHTML="Vamos admirar essa paisagem! Bom, o jardim está precisando de um pouco mais cuidado, mas ainda é um jardim amplo. Você deveria ter vindo aqui há algumas decadas e durante a primavera… Ah, como era cheio de flores… Olhe aquela jovem passeando por entre os arbustos secos! Ela está dando “oi” pra você! Seja educado";
    clearInterval(intervalo);
    return decisaoJardim;
  }

 else{
   alert("Digite escolha válida")
   return n1Act;
   }
  }, 300); 
}

function decisaoJardim(){
  var intervalo= setInterval(() => {
  
  var act1 = prompt("O que você quer fazer? \n1 - Acenar de volta  \n 2 - Ignorar")

  if(act==1){
    alert("Você acena de volta, a mulher sorri para você. Ela caminha em direção a janela, lentamente. Parece que ela está sussurrando algo, mas está longe demais… Você não consegue entender… Você sente uma mão tocar no seu ombro. Por reflexo, você se vira e quem está te encarando é uma versão digamos que mais velha da moça….");
    texto.innerHTML=" Uma mulher esquelética vestida de noiva encara Michael. Ele desmaia e é arrastado para debaixo da cama. Será que alguém vai procurar aqui?";
    buttom.value="Jogar novamente";
    buttom.onclick = gameOverOver;  
    clearInterval(intervalo); 
  }

  else if(act1==2){
    alert("Ora, ora… O que custava um aceno de mão? Assim você magoa os sentimentos dela! Ela podia ser sua amiga, mas agora…");
    texto.innerHTML="";
    texto.innerHTML="Michael se vira e vê parada na porta a moça que estava no jardim. Ela está vestida de noiva e aos poucos vai se transformando em uma mulher de aparência cadavérica.  Ele paralisa. Ela avança sobre ele e ele cai no chão, petrificado."
    buttom.value="Jogar novamente";
    buttom.onclick = gameOverOver;  
    clearInterval(intervalo);
  }

  else{
    texto.innerHTML= "Digite opção válida"
    return decisao;
    }
  }, 3000);
}

