// Operador rest

// Vamos criar uma função que receba alguns numeros e os mostre no console
// Supondo que eu nao saiba quantos numeros o usuario irá mandar, preciso usar o rest, ou seja, todos os outros parametros ficarão armazenados no rest. com ...antes do parametro. Usando o rest, temos o retorno dos parametros informados em forma de Array

function addNumber(...number) {
  console.log(number);
}

addNumber(44, 3, 2, 1, 5, 6, 7);
