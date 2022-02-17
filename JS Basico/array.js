// Em uma variavel podemos armazenar uma lista de itens, nomes , seja o que for, então pra isso temos o array, que é uma lista. Para criar, usamos uma variável que recebe colchetes, e cada item da lista, é separada por vírgula. Lembrando que todo array, começa a contar a partir do índice zero.

// Um array pode receber QUALQUER TIPO DE DADO, seja função, number, objeto, string etc

let carros = ["Fusion", "Golf", "Corolla", "Voyage"];

// Para acessar o item de um array especificamente, passo o nome do array[1]
console.log(carros[1]);

// No exemplo abaixo temos arrays, como itens de um array, separando dentro da lista de ingredientes, uma lista para frutas e uma lista para massas
let ingredientes = [
  ["uva", "pera", "maçã"],
  ["arroz", "macarrão"],
];

// para acessá-lo , fazemos :
console.log(ingredientes[0]);
console.log(ingredientes[1]);

// para acessar um item em especifico ded um array, dentro de outro array fazemos:
console.log(ingredientes[1][1]); // macarrão
