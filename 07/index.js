const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

if (aposentada || portadoraDeDoenca) {
  console.log("ISENTA");
}

else if (totalDeRendimentos < 2284700) {
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}

else if (totalDeRendimentos >= 2855970){
  console.log("PEGA LEAO");
}   

// Imprime "PEGA LEAO"


/* Exemplos
const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; 

Imprime "ISENTA"

const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2000000;

Imprime "VAZA LEAO! JA TA DIFICIL SEM VOCE" */
