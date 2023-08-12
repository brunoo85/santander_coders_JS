const linguagens = ['javascript', 'python', 'golang', 'java']

linguagens.shift();

console.log(linguagens);
console.log(`Tamanho da lenght: ${linguagens.length}`);

linguagens.shift();

console.log(`Novo tamanho da lenght: ${linguagens.length}`);