// JSON -> Javascript Object Notation, é a forma com que o js trata os dados ded requisições, ou seja, a reposta de uma requisição virá no formado JSON. Ele faz a comunicação entre requisições, seja pra enviar, receber, e alterar informações.

// É como se o JSON fosse a lingua universal de comunicação do Javascript para requisições.

// É um objeto js em que armazenamos informações. Veja o Exemplo :

let pessoa = { nome: "Luciano", sobrenome: "Gomes" };

// Quando fazemos uma requisição, recebemos um JSON puro, em formato de string
// Algo nessa forma :
('{"nome" : "luciano" , "idade" : 24}');

// Para tratarmos esse JSON usamos o JSON.parse(),
