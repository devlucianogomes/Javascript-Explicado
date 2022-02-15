/**
 * Distancias e Scroll Suave
 
usamos o Windows.scrollY quando queremos medir o scroll na tela inteira
porém se quisermos num elemento específico, selecionamos o elemento e usamos scrolltop, scrolldown
 */

// Comando para a pagina fazer um scroll para o top de forma suave

// Chamar a função dentro de um button no projeto
function scrollScreenTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
