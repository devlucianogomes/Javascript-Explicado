// Manipulando Arrays parte 3

// FIND -> Retornará o primeiro item encontrado, exemplo, quero pegar o usuario que tem o nome, Fulano de tal. Se retornar true, é porque encontrou o item, e então o mostrará no novo array

let lista = [
  "São Paulo",
  "Real Madrid",
  "PSG",
  "Barcelona",
  "Manchester United",
  "Liverpool",
];

// Quando usamos o FIND ele nos retorna o elemento em sí, porém quando usamos o findIndex , ele nos retorna o index em que está o determinado elemento
let timesSeparados = lista.find(function (item) {
  if (item === "Real Madrid") {
    return true;
  } else {
    return false;
  }
});

console.log(timesSeparados);

// Exemplo Real, lista de usuarios
let usuarios = [
  {
    id: 1,
    nome: "Luciano",
    sobrenome: "Gomes",
  },
  {
    id: 2,
    nome: "Caio",
    sobrenome: "Augusto",
  },
  {
    id: 3,
    nome: "Paulo",
    sobrenome: "Miguel",
  },
  {
    id: 4,
    nome: "Filipe",
    sobrenome: "Gomes",
  },
];

// Encontrar o usuarios com sobrenome Gomes
let usuario = usuarios.find(function (item) {
  return item.sobrenome === "Gomes" ? true : false;
});

console.log(usuario);
