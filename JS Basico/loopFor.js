// Loop Foor -> rodar o mesmo código varias vezes distintas, serve para percorrer dados, para isso usamos o FOR, que por sí só tem 3 etapas. A primeira é nos parametros a criação de uma variável auxiliar, geralmente (item) ,  é essa variavel que vai dizer quantas vezes o código irá rodar. Segundamente colocamos a condição para que o loop sera realizado, ou seja, enquanto a condição estiver sendo satisfeita, ele irá repetir o código, até que a condição nao seja satisfatória. Terceiramente, colocamos o que acontecerá com a varíavel auxiliadora, ou seja, no exemplo abaixo, após a condição ser realizada, a variavel item passa a ter o seu valor + 1

// Temos 2 tipos de for, o For Loop, e o For Loop Array

// For Loop, exemplo : fazer uma listagem do numero 1 até o numero 50

let texto = "";

for (let i = 0; i <= 50; i++) {
  // em cada vez que o código for executado
  texto = texto + i;
}

console.log(texto);

// For Loop Array
let carros = ["Ferrari", "Fusca", "Palio", "Corolla", "BMW"];

for (let item in carros) {
  console.log(carros[item]);
}
