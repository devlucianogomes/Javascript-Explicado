// Callback -> É uma função que criamos para outra execução, geralmente assíncrona. Callback significa ligar de volta. Exemplo : te ligo de volta, quando algo acontecer. É assim que funciona o callback, é uma função executada, quando algo acontecer, algo seja satisfeito ou processado. Reusmindo, quando tiver determinada informação em mãos, execute X função para mim.

// Função alertar, sendo executada a cada 2 segundos
function alertar() {
  console.log("Voce foi alertado");
}

setTimeout(alertar, 2000);
