/**
 * Funções 
 -> Um conjunto de códigos, para executar uma determinada ação
 exemplo, função que faz a soma de 2 valores, funcao que verifica se os dados do usuario sáo válidos etc.

 TODA FUNÇÃO , após a sua declaração, precisa ser invocada, inicializada.
 */

function saudacao() {
  console.log("Olá, seja bem vindo");
}

saudacao();

// Funções podem receber Parãmetros,
// Parâmetros são passados dentro dos parenteses da função, esses dados se tornarão varriáveis dentro da mesma.

function dizerNome(nome, idade) {
  console.log(`Olá ${nome}, ${idade} anos. Seja bem vindo!`);
}

// Na hora da invocação da função, passamos o valor respondente ao parametro colocado na função, ou seja, no exemplo abaixo, 'luciano' será armazenago dentro do parametro Nome, que está dentro dos parenteses da função. Da mesma forma que o valor 24, será armazenada dentro do parametro Idade
dizerNome("Luciano", 24);
