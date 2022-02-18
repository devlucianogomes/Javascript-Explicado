// Objetos com Javascript

// Quando criamos um objeto, parramos pra ele propriedades e métodos, atributos são características, e geralmente métodos, são ações,no exemplo abaixo, vamos ter um objeto de um carro. Lembrando que para criar o objetos, definimos uma variavel que recebe chaves, e dentro, suas informações

// Ou seja, temos o objeto carro, que tem marca, modelo, ano de fabricação e também a informação se existe em estoque ou não

let carro = {
  marca: "Toyota",
  modelo: "Corolla Xei 2.0",
  anoDeFabricacao: 2019,
  possuiEstoque: true,

  // Recebendo funções como propriedades de um objeto
  ligar: function () {
    console.log("Carro ligado !");
  },

  acelerar: function () {
    console.log("Vrum vrum vrum");
  },
};

// Para acessar um obj, usamos a notação ponto.
console.log(carro.modelo);

// acessando as funcoes dentro do objeto
carro.ligar();
carro.acelerar();

// USO DO THIS
// this faz referencia ao proprio elemento que está em contexto, mas se atente, ele existe DENTRO DO OBJETO

// Outra forma de fazermos a lista, agora com varios filmes
let filmes = [
  { nome: "Resident Evil", ano: 2021 },
  { nome: "Invocação do mal 3", ano: 2021 },
];

// Acessando...
console.log(filmes[0]); // trazendo o primeiro filme
console.log(filmes[0].nome); // nome
console.log(filmes[0].ano); // ano
