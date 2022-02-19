// Manipulação de Arrays -> IMPORTANTÍSSIMO

let lista = ["Ovo", "Farinha", "Corante", "Massa"];

// Transformar o array para uma STRING, retorna tudo separado com vírgula
console.log(lista.toString());

// Pega os itens do array e transforma em uma String, no parametro, passamos qual o item será o separador do array, pode ser vírgula, ponto, hifén etc
console.log(lista.join("-"));

// indexOf -> Procurar um item específico no array, e então ele me dirá em que posição está o item selecionado. Se achar, devolve o index, se não, devolve -1
console.log(lista.indexOf("Corante"));

// Pop -> Remove o ULTIMO item do array, porém altera a forma original do array
lista.pop(); // ultimo item
console.log(lista);

// Shift ->  Remove o PRIMEIRO item do array, também altera a forma original do array
lista.shift(); // primeiro item
console.log(lista);

// Push -> ADICIONA um item dentro do array , tembém altera a estrutura do array
lista.push("Leite");
lista.push("Fermento");
console.log(lista);

// Alterar algum item do array, também altera a forma do array, atenção, pois se colocar um índice que não existe, ele faz a criação de um novo
lista[0] = "Ovos"; // pegando o primeiro item e alterando seu valor
console.log(lista);

// REMOVER um item de um array
// O método Delete, não elimina o slot, ele deleta a informação, porém com o mesmo numero de slots, então usamos o SPLICE, que recebe 2 parametros, o primeiro é o index que queremos remover, e o segundo é quantos itens queremos remover a partir do index selecionado
lista.splice(2, 1);
console.log(lista);

// Concatenar 2 arrays
let lista2 = ["Prato", "Liquidificador", "Forno"];
let listasJuntadas = lista.concat(lista2);
console.log(listasJuntadas);

// ORDENAR um array, lembre-se, para usar o reverse, primeiro tem que usar o sort, se não ele irá reverter a ordem original do array, a ordem que foi criado
lista.sort(); // ordem Alfabética
console.log(lista);
lista.reverse(); // invertendo a ordem Alfabética
console.log(lista);
