/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

let el1 =0;
let el2 = 1;
let el3=1;
let aux;

let fibos=[0,1];

function fibo (indice){

     if(indice<2&&indice==1){
          fibos.pop()
     }

     for(let i=2;i<indice;i++){
          fibos.push(fibos[i-1]+fibos[i-2])
     }
     console.log(fibos)
}

// function imprimirFibo(indice){
//      for(let i=0;i<indice;i++){
//           console.log(`${fibos[i]}`);
//      }
// }

fibo(10)