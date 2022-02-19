// Trabalhando com Timers no javascript, podemos desejar que cada código ou função etc, seja execultada a cada espaço de tempo, intervalo de minutos ou segundos

// funcao ira mostrar a hora atual na tela a cada segundos
function exibirHoraAtual() {
  let dia = new Date();
  let hora = dia.getHours();
  let minuto = dia.getMinutes();
  let segundo = dia.getSeconds();

  // vamos juntar isso tudo num texto com a data e hora
  let text = hora + ":" + minuto + ":" + segundo;

  console.log(text);
}

// Agora faremos com que a função de exibir a hora, seja rodada a cada X segundos, no setInterval, passamos no parametro a funcao desejada, e em seguida, o tempo que demorará para a funcao ser executada, o valor deve ser passado em milisegundos.

// let timer = setInterval(exibirHoraAtual, 3000);
