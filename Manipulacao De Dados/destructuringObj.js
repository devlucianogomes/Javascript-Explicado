// Desconstrução de objeto, ou também, extração de informações isoladas

let pessoa = {
  nome: "Luciano",
  sobrenome: "Gomes",
  idade: 24,
  social: {
    facebook: "gomesdev",
    instagram: "srlucianorvd",
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// Retirar informações de dentro do objeto, e armazenar numa variável diferente.
// Criamos uma variavel e dentro de colchetes, eu coloco as informações que quero pegar, e passo a igualdade da variavel recebendo o objeto

// Posso definir um valor padrão para a variável, pois caso ela nao seja passada, ja tenha algo em memoria e não venha vazia. No caso abaixo, a idade, caso não informada pelo usuario, ja terá o valor de 0 como default.

let { nome, sobrenome, idade = 0 } = pessoa;

console.log(nome, sobrenome, idade);
