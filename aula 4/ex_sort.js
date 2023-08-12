const atletas = [
     { nome: 'João', altura: 1.75, peso: 80 },
     { nome: 'Maria', altura: 1.68, peso: 60 },
     { nome: 'Pedro', altura: 1.80, peso: 70 },
     { nome: 'Ana', altura: 1.65, peso: 55 },
     { nome: 'Carlos', altura: 1.90, peso: 100 }
   ];
   
//    atletas.sort(function (a, b) {
//      if (a.peso > b.peso) {
//        return 1;
//      }
//      if (a.peso < b.peso) {
//        return -1;
//      }
//      // a must be equal to b
//      return 0;
//    });


//    atletas.sort(function (a, b) {
//      if (a.altura < b.altura) {
//        return 1;
//      }
//      if (a.altura > b.altura) {
//        return -1;
//      }
//      // a must be equal to b
//      return 0;
//    });

atletas.sort(function (a, b) {
     if (a.nome > b.nome) {
       return 1;
     }
     if (a.nome < b.nome) {
       return -1;
     }
     // a must be equal to b
     return 0;
   });

console.log(atletas);