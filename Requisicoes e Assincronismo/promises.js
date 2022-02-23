// Promise -> São promessas, quando fazemos requisições assíncronas, enquanto ela é executada nos temos uma espece de promise, que é um resultado temporário, ou uma promessa de que algum tempo eu terei o resultado

// Exemplo : função que vai até o sensor, pega a temperatuda da pessoa, enquanto ela pega o dado, ela nos retorna uma promessa, que fica registarda em console, logo após, ela faz uma simulação usando um timeout de 2 segundos, e nos retorna a resolução da promessa, que por sí mesma pode ter tanto o resolve para ok, quanto o reject para falso.

// Em uma promisse, é OBRIGATÓRIO ter o resolve e o reject

function pegarTemperatura() {
  return new Promise(function (resolve, reject) {
    console.log("Pegando temperatura...");

    setTimeout(function () {
      resolve("40 Graus");
    }, 2000);
  });
}

// Chamando a função e tendo o retorno da promessa
pegarTemperatura();

// Usando a Promise, armazenando numa varíavel
// .then -> quando tiver o resultado, faça isso
// PS : O QUE É RECEBIDO NO PARAMETRO COMO RESULTADO, É O QUE ESTÁ NO RESOLVE DA PROMISE
let temp = pegarTemperatura();
temp
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (error) {
    console.log("Eita, deu erro!");
  });
