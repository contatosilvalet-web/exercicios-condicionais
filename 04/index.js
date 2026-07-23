const ladoA = 3;
const ladoB = 3;

if (ladoA === ladoB) {
    
    if (ladoA === 0) {
        console.log("Bucha de branco");
    } else if (ladoA === 1) {
        console.log("Bucha de ás");
    } else if (ladoA === 2) {
        console.log("Bucha de duque");
    } else if (ladoA === 3) {
        console.log("Bucha de terno");
    } else if (ladoA === 4) {
        console.log("Bucha de quadra");
    } else if (ladoA === 5) {
        console.log("Bucha de quina");
    } else if (ladoA === 6) {
        console.log("Bucha de sena");
    }
    
} else {
    console.log("NÃO");
}

// Imprime ""Bucha de terno"

/* Exemplos
Exemplo 01:
ladoA = 5;
ladoB = 7;

Resultado: NÃO

Exemplo 02:
ladoA = 5;
ladoB = 5;

Resultado: Bucha de quina

Exemplo 03:
ladoA = 0;      
ladoB = 0;

Resultado: Bucha de branco */ 
