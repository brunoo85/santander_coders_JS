// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

let numerosSorteados = [];
let numeroJaSorteado = false;
do{
     numero=Math.floor(Math.random()*(60-1)+1);
     for (const valor of numerosSorteados) {
          if(valor==numero){
               numeroJaSorteado=true;
               console.log("numero repetido encontrado");
          }
     }
     
     if(numeroJaSorteado==false){
          numerosSorteados.push(numero);
     } else{
          if(numero!=1){
               numerosSorteados.push(numero-1);
          }else{
               numerosSorteados.push(numero+1);
          }
          
     }
}while(numerosSorteados.length<6)

console.log(numerosSorteados);