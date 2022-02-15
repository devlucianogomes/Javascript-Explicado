/**
  Para referenciar o DOM, existe o Document,e é a através dele que
  vamos conseguir referenciar, selecionar, separar, elementos em tela para dentro de uma variável e em seguida, manipular da forma que queremos

  Temos 4 comandos distintos para selecionar elementos em tela
, sendo eles : 

-> getElementByID = selecionamos os elementos peelo seu ID

-> getElementsByClassName = seleciona a partir da classe

-> getElementsByTagName = seleciona a partir do nome da tag

-> getElementsByName = seleciona pelo atributo name

  
 */

// getElementById, selecionando e em seguida ALTERANDO o conteudo do HTML
let texto = (document.getElementById("teste").innerHTML = "Texto Alterado");

// getElementsByClassName, selecionando todos os items que contem determinada class, ou seja, se tiver mais de um elemento com o mesmo nome da class, vai retornar todos, retorna uma HTML Collection (array), sendo que para acessar cada item, devemos usar colchetes e referenciar o index
let listas = document.getElementsByClassName("lista");
listas[0].innerHTML = "Lista de índice 0 alterada";
listas[1].innerHTML = "Lista de índice 1 alterada";

// getElementsByTagName, nos retornará uma lista (array) com todos os elementos que possuem a tag informada, ou seja, no exemplo, nos retornara todas as divs do projeto
let items = document.getElementsByTagName("div");
console.log(items);

//getElementsByName , selecionamos os elementos pelo seu name
let inputCPF = document.getElementsByName("cpf");
