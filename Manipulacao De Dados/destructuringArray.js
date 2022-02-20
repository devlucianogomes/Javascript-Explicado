// Desconstruindo Arrays, retirando informações em variaveis
// A desconstrução de ARRAY deve ser na ordem em que os itens do array foram criados. Caso não queiramos alguma variavel, passamos um espaço vazio na desestruturação, então será ignorado.
let array = ["Luciano", "Gomes", "@gomesrvd", "lucianorvd"];

let [nome, sobrenome, instagram, facebook] = array;

console.log(array);
