const lugares = [
     { nome: 'Sala de Reuniões', capacidade: 8 },
     { nome: 'Sala de Treinamento', capacidade: 20 },
     { nome: 'Sala de Conferências', capacidade: 30 },
     { nome: 'Sala de Estudos', capacidade: 12 },
     { nome: 'Auditório', capacidade: 50 }
   ]

const cap10 = lugares.find(lugar => lugar.capacidade >=10);

console.log(cap10);

const cap25 = lugares.find(lugar => lugar.capacidade >=25);

console.log(cap25);

const cap40 = lugares.find(lugar => lugar.capacidade >=40);

console.log(cap40);

