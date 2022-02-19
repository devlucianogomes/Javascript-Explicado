// Métodos de manipulação de String

let nome = "Luciano Gomes de Lima Filho";

// CONTAR quantos caracteres a string possui, espaços são contados
console.log(nome.length);

// ENCONTRAR e saber se existe na string algum texto específico
// a função indexOf retorna a posição em que o texto ou a letra começa, e caso não encontre, retornará -1
console.log(nome.indexOf("Gomes"));

// EXTRAIR informaçoes de uma string
// Slice -> recebe como parametro, a posição inicial que quer começar a pegar as informações, como segundo parametro, colocamos a posição final.quando colocamos um numero negativo, ele pega a partir do fim da string, ou seja, no caso da variavel nome, se eu quero pegar somente o sobrenome filho, ficaria assim
console.log(nome.slice(-25));

// SUBSTRING - exatamente igual ao Slice, porém com o substring, nao consigo colocar valores negativos
console.log(nome.substring(-5));

// SUBSTR -> parecido com os anteriores, porém ele fere apenas no segundo parametro, o primeiro parametro é a posicao inicial, e o segundo é a quantidade de caracteres que sera pegada.
console.log(nome.substr(8, 5));

// SUBSTITUIR textos específicos em uma String
// O replace recebe 2 parametros, o primeiro é o item que quero encontrar, e o segundo é o valor que quero colocar no lugar, lembrando que a string depois que alterada DEVE SER ARMAZENADA em uma nova Variável
console.log(nome.replace("Gomes", "Sobrenome"));

// letras MAIÚSCULAS
console.log(nome.toUpperCase());

// letras minúsculas
console.log(nome.toLowerCase());

// REMOVER ESPAÇOS
console.log(nome.trim());

// Saber qual o caractere que está em determinada posição
console.log(nome.charAt(2));

// TRANSFORMAR string em array. O split transforma a string em array, e com o parametro devo colcoar o identificador para separar os itens, ou seja, no exemplo abaixo, onde eu encontrar um espaço, eu crio um item diferente
console.log(nome.split(" "));
