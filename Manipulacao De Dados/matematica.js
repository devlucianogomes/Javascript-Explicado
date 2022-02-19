// Algumas funções matemáticas que usamos com Frequencia

let numero = 3.67;

// Math.Round -> faz o ARREDONDAMENTO PADRÃO, abaixo de 5 para o baixo, acima, arredonda pra cima
console.log(Math.round(numero));

// Math.floor -> sempre ARREDONDARÁ para baixo, mesmo que seja 3.99, será arredondado a 3
console.log(Math.floor(numero));

// Math.ceil -> sempre ARREDONDARÁ para cima, mesmo que seja 3.10 , será arredondado a 4
console.log(Math.ceil(numero));

// Saber o NUMERO ABSOLUTO de algum número
console.log(Math.abs(numero));

// Math.min -> iremos mandar varios numeros,e ele nos retornará O MENOR NUMERO
console.log(Math.min(4, 5, 6, 3, 2, 10));

// Math.max -> iremos mandar varios numeros e ele nos retornará O MAIOR NÚMERO
console.log(Math.max(1, 2, 3, 4, 5, 900));

// Math.random -> geralmente usada em conjunto com outra função, ela retorna um numero aleatório entre 0 e 1. Podem queremos sempre entre 0 e algum outro valor, entao usamos a função random, multiplicamos pelo numero máximo que eu quero e depois eu divido o resultado, arredondando para baixo
console.log(Math.floor(Math.random() * 100));
