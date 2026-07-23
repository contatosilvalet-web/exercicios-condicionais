const caractere = "E";

if (/[AEIOUaeiou]/.test(caractere)) {
    if (caractere === caractere.toUpperCase()) {
        console.log("Vogal maiúscula");
    } else {
        console.log("Vogal minúscula");
    }
} else if (/[0-9]/.test(caractere)) {
    console.log("Número");
} else {
    console.log("Consoante");
}

// Imprime "Vogal maiúscula" 


/* Exemplos
const caractere = "a";
Imprime "Vogal minúscula"

const caractere = "3";
Imprime "Número"

const caractere = "b";
Imprime "Consoante"

const caractere = "U";
Imprime "Vogal maiúscula" */ 
