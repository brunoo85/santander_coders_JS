// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares
/*
const lista=[1,2,3,4,5,6,7,8,9];

let listaPares=[];
let listaImpares=[];

for(let i=0;i<lista.length;i++){
     if(lista[i]%2!=0){
          listaImpares.push(lista[i]);
     }else{
          listaPares.push(lista[i]);
     }
}

console.log(`${listaPares} -> Pares`);
console.log(`${listaImpares} -> Impares`);
*/
// ============================

const listaDeAlunos = [
     { nome: 'João', nota1: 8, nota2: 7 },
     { nome: 'Maria', nota1: 9, nota2: 8 },
     { nome: 'Carlos', nota1: 6, nota2: 5 },
     { nome: 'Ana', nota1: 7, nota2: 6 },
     { nome: 'Pedro', nota1: 10, nota2: 9 },
     { nome: 'Lúcia', nota1: 8, nota2: 7 },
     { nome: 'Fernando', nota1: 7, nota2: 6 },
     { nome: 'Camila', nota1: 9, nota2: 8 },
     { nome: 'Rafael', nota1: 6, nota2: 5 },
     { nome: 'Juliana', nota1: 10, nota2: 9 }
   ];

for (const aluno of listaDeAlunos) {
     console.log(`${aluno.nome}; Nota 1 = ${aluno.nota1}; Nota 2 = ${aluno.nota2}`)
}