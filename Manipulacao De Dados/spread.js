// Operador Spread -> funciona tanto para array quanto para objeto

let numeros = [1, 2, 3, 4];

// Vamos criar um novo array que será o complemento do de cima, ja aproveitando o de cima. Para isso chamamos o array anterior com ...nomeDoArray
let numero2 = [...numeros, 5, 6, 7, 8];

console.log(numero2);

// agora com objetos

let infos = {
  nome: "Luciano",
  sobrenome: "Gomes",
  idade: 90,
};

let novasInfos = {
  ...infos,
  cidade: "Rio Verde",
  estado: "Goiás",
};

console.log(novasInfos);
