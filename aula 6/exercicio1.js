/*
  Faça um programa com uma função chamada somaImposto.
  A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre 
  vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
  A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

let produtos=[{
     nome: "camisa",
     valor: 10
},{
     nome: "calça",
     valor: 300
}];

let imposto = 0.2;  //20% /100
let aumento = 0;
let valorOriginal;

function somaImposto(valor,imposto) {
     valorOriginal = valor;
     aumento = imposto*valor;
     valor += aumento;

     return {
          valorOriginal,
          aumento,
          valor
     }
}

let soma;

const newProdutos = produtos.forEach(produto =>{

     soma = somaImposto(produto.valor,imposto);
     console.log(soma);

});

