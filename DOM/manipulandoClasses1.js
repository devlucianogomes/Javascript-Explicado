/**
 * Manipulando Class
 *
 * No exemplo abaixo, temos 3 botoes no html, e um titulo acima, para cada botão clicado, o backgroundColor do titulo será alterado,
 * primeiramente, setamos no CSS as classes com as cores, para que as mesmas possam ser adicionadas, ou removidas via javascript. Em seguida atribuimos ao button no html, a função que fará a alteração da class
 */

function setVerde() {
  // removendo as classes ja existentes
  document.querySelector(".exemplo").classList.remove("vermelho");
  document.querySelector(".exemplo").classList.remove("azul");
  // selecionando o titulo e adicionando a classe verde
  document.querySelector(".exemplo").classList.add("verde");
}

function setVermelho() {
  // removendo as classes ja existentes
  document.querySelector(".exemplo").classList.remove("verde");
  document.querySelector(".exemplo").classList.remove("azul");
  // selecionando o titulo e adicionando a classe vermelho
  document.querySelector(".exemplo").classList.add("vermelho");
}

function setAzul() {
  // removendo as classes ja existentes
  document.querySelector(".exemplo").classList.remove("vermelho");
  document.querySelector(".exemplo").classList.remove("verde");
  // selecionando o titulo e adicionando a classe azul
  document.querySelector(".exemplo").classList.add("azul");
}

function switchColor() {
  // selecionando o elemento e verificando se ele contem a classe preto
  // isso nos retornará true ou false e apartir disso, usamos o IF
  if (document.querySelector(".btnSwitch").classList.contains("preto")) {
    document.querySelector(".btnSwitch").classList.remove("preto");
    document.querySelector(".btnSwitch").classList.add("verde");
  } else {
    document.querySelector(".btnSwitch").classList.add("preto");
    document.querySelector(".btnSwitch").classList.remove("verde");
  }
}
