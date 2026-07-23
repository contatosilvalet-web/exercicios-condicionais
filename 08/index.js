const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
  console.log("ACESSO NEGADO");
}

else if (ehEstudante || idade < 18) {
  console.log("10 reais");
}

else {
  console.log("20 reais");
}

// Imprime "20 reais"

/* Exemplos
const idade = 10;
const possuiPatologia = false;
const altura = 110;
const ehEstudante = false;

Imprime "ACESSO NEGADO"

const idade = 20;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = true;

Imprime "10 reais"

const idade = 17;
const possuiPatologia = true;
const altura = 160;
const ehEstudante = true;

Imprime "ACESSO NEGADO" */

