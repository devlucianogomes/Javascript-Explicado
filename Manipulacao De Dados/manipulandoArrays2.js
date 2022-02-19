// Manipulação de arrays 2

let lista = [45, 4, 9, 16, 25];

// MAP -> mapeia o array, percorre o array, e para cada item encontrado no array, irá executar uma função diferente. Lembrando que após finalizar o map, ele GERA UM NOVO ARRAY
// vamos gerar um array, com cada valor do array, sendo multiplicado por 2

let novoArray = lista.map(function (item) {
  // irá item a item do array lista, e fará alguma coisa
  return item * 2;
});

console.log(novoArray);

// Filter -> Irá retornar true or false, true quando encontra o determinado item do array, e false quando não
// Vamos gerar um novo array, apenas com os numeros menores que 20

let menoresDe20 = lista.filter(function (item) {
  if (item < 20) {
    return item;
  }
});

console.log(menoresDe20);

// EVERY -> irá dizer se todos os itens do array, bateram com a condição
// Irá verificar se todos os itens são maiores que 20, se forem, retorna true, se não, nos retorna falso
let listaEvery = lista.every(function (item) {
  if (item > 20) {
    return true;
  } else {
    return false;
  }
});

console.log(listaEvery);
