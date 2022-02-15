/**
 * Query Selector
 Aqui podemos selecionar pelo id, class, tag, name, da forma que quisermos basta que no parametro do querySelector, passamos os seletores conforme usamos no css  Ou seja, se quisermos pela class usamos .nomeDaClass , se quisermos pelo ID ,  usamos #nomeDoId e assim vai. 

 Atenção! = Quando eu uso o querySelector ele retorna somente o primeiro item encontrado, quando quero trazer mais de um item, ou seja, todos os elementos encontrados , devo usar o querySelectorAll, que nos retornará uma NODE LIST, diferente do getElementsByTagName que nos retorna um ARRAY
 */

let button = document.querySelector(".btn");
console.log(button);

// querySelectorAll , trazendo todos os elemntos que tem a class btn
let buttons = document.querySelectorAll(".btn");
console.log(buttons);
