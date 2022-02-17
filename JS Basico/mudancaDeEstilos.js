// Manipulando estilos com JS

function setarAzul() {
  limpar();
  document.querySelector(".titulo").classList.add("azul");
}

function setarVermelho() {
  limpar();

  document.querySelector(".titulo").classList.add("vermelho");
}

function setarVerde() {
  limpar();
  document.querySelector(".titulo").classList.add("verde");
}

function limpar() {
  document.querySelector(".titulo").classList.remove("azul");
  document.querySelector(".titulo").classList.remove("vermelho");
  document.querySelector(".titulo").classList.remove("verde");
}

function mostrarTelefone() {
  // selecionar o elemento e trocar o atributo de display none pra block
  document.querySelector(".telefone").style.display = "block";
}
