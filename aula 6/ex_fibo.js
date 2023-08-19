/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

//com recursão:

// let fibos=[];
const set = new Set;


function fibo(indice){
     if(indice<=2){
          set.add(1);
          return 1
     }else{
          set.add(fibo(indice-1)+fibo(indice-2));
          return fibo(indice-1)+fibo(indice-2)
     }
}

fibo(10)

// fibos.sort(function(a,b){
//      if (a>b) return 1;

//      if(a<b) return -1;

//      return 0;
// })

let index=0;

console.log(Array.from(set));



// let index=0;
// for(let i=1;i<10;i++){
//      if(fibo.find(i)){
//           index= fibo.find(i)
//           remove
//      }
// }


// console.log(fibos)

//sem recursão
