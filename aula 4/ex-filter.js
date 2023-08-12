const alunos = [
     { nome: 'Ana', idade: 20 },
     { nome: 'Pedro', idade: 18 },
     { nome: 'Maria', idade: 22 },
     { nome: 'João', idade: 17 },
     { nome: 'Lucas', idade: 19 },
     { nome: 'Julia', idade: 21 }
   ]

// const alunos18 = alunos.filter(aluno => aluno.idade >= 18);
// console.log(alunos18);


// const alunos20 = alunos.filter(aluno => aluno.idade < 20);
// console.log(alunos20);

const alunosJ = alunos.filter(aluno => aluno.nome.startsWith('J') === true);
console.log(alunosJ);