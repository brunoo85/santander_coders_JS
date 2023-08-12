var pessoas = [
	{ nome: "João", idade: 22 },
	{ nome: "Maria", idade: 17 },
	{ nome: "Pedro", idade: 18 },
	{ nome: "Ana", idade: 22 },
	{ nome: "Carlos", idade: 16 }
];

const maiorIdade = pessoas.every(pessoa => pessoa.idade >= 18);

console.log(maiorIdade); //alterei a idade e coloquei todas iguais ou maiores que 18 anos, e não tive falhas.

const maiorQueTres = pessoas.every(pessoa => pessoa.nome.length >3);

console.log(maiorQueTres); // alterei para maior ou igual, e o resultado mudou.

const idadeENomeDefinido = pessoas.every(pessoa => pessoa.idade>0 && pessoa.nome.length >0);

console.log(idadeENomeDefinido); // apaguei o nome de uma das pessoas e apareceu falso