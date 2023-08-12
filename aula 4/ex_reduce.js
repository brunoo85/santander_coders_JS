const alunos = [
     { nome: 'Ana', notas: [7, 8, 9] },
     { nome: 'Pedro', notas: [5, 6, 7] },
     { nome: 'Maria', notas: [9, 8, 10] },
     { nome: 'João', notas: [6, 7, 8] },
     { nome: 'Lucas', notas: [8, 9, 7] },
     { nome: 'Julia', notas: [10, 8, 9] }
   ]

   let media;
const medias = alunos.map(aluno =>{

     media = aluno.notas.reduce((notaT, nota) => notaT+nota);
     media = media/aluno.notas.length;

     media = Number(media.toFixed(2))

     return({
          nome: aluno.nome,
          media
     })

})

console.log(medias);