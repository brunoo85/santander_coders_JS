const empregados = [
     { nome: 'João', salario: 1200 },
     { nome: 'Maria', salario: 1300 },
     { nome: 'Pedro', salario: 1200 },
     { nome: 'Ana', salario: 1400 },
     { nome: 'Carlos', salario: 2000 }
   ];
   
const salMaior = empregados.some(empregado => empregado.salario>= 1500);

console.log(salMaior);

const salMenor = empregados.some(empregado => empregado.salario <= 1000);

console.log(salMenor);