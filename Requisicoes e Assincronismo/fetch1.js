// Fazendo requisições com uma Fake API - JSON Placeholder

// Criando a função para listar os posts na div posts
// O fetch recebe 2 parametros, o primeiro é a URL que queremos fazer a requisição, e como segundo parametro, passamos um objeto com as configurações da requisição. Caso não informamos o segundo parametro, o padrão é requisição do tipo GET

//Passo : 1 - Pego a requisição e espero o resultado, 2 - pego o resultado e transformo pra JSON . 3- Pego o json e o retorno.
function loadPosts() {
  document.getElementById("posts").innerHTML = "Carregando...";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (resultado) {
      return resultado.json(); // retornando o usuario como JSON ( promise )
    })
    .then(function (json) {
      // Funcao para montar o ''blog''
      montarBlog();
    })
    .catch(function (error) {
      console.log("Deu problema na requisição :(");
    });
}

function montarBlog(lista) {
  let html = "";

  // percorrendo o array de posts
  for (let i in lista) {
    html += "<h3>" + lista[i] + "</h3>";
    html += lista[i].body + "<br>";
    html += "<hr/>";
  }

  document.getElementById("posts").innerHTML = html;
}
