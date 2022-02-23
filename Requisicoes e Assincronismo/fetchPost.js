// Enviando com POST, usando Fetch
async function inserirPost() {
  document.getElementById("posts").innerHTML = "Carregando...";

  let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Título Teste",
      body: "Corpo teste",
      userId: 4,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let json = await req.json();

  console.log(json);
}
