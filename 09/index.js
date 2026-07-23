const nota = 8.5;

if (nota >= 9 && nota <= 10) {
    console.log("O estudante obteve conceito A");
}
else if (nota >= 8 && nota < 9) {
    console.log("O estudante obteve conceito B");
}
else if (nota >= 6 && nota < 8) {
    console.log("O estudante obteve conceito C");
}
else if (nota >= 4 && nota < 6) {
    console.log("O estudante obteve conceito D");
}
else {
    console.log("O estudante obteve conceito E");
}

// Imprime "O estudante obteve conceito B"

/* Exemplos
const nota = 9.5;

Imprime "O estudante obteve conceito A"

const nota = 3.0;
Imprime "O estudante obteve conceito E"

const nota = 7.0;
Imprime "O estudante obteve conceito C" */

