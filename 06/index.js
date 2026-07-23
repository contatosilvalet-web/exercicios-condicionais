const alturaEmCm = 185;

if (alturaEmCm < 180) {
    console.log("REPROVADO");
} 

else if (alturaEmCm <= 185) {
    console.log("LÍBERO");
} 

else if (alturaEmCm <= 195) {
    console.log("PONTEIRO");
} 

else if (alturaEmCm <= 205) {
    console.log("OPOSTO");
} 
else {
    console.log("CENTRAL");
}

// Imprime "LÍBERO" 

/* Exemplos
const alturaEmCm = 193;
Imprime "PONTEIRO"

const alturaEmCm = 200;
Imprime "OPOSTO"

const alturaEmCm = 213;
Imprime "CENTRAL" */
