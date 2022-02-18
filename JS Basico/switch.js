// Switch , quando precisamos varificar várias vezes os valores de uma varíavel para ter condicionais diferentes, dai sim usamos o switch

let diaDeSemana = 3;
let diaNome = "";

switch (diaDeSemana) {
  case 1:
    diaNome = "Domingo";
    break;

  case 2:
    diaNome = "Segunda";

    break;

  case 3:
    diaNome = "Terça";

    break;

  case 4:
    diaNome = "Quarta";

    break;
}

console.log(diaNome);
