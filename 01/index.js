const jogada1 = "pedra";
const jogada2 = "tesoura";

// Verificar se dá empate
if (jogada1 === jogada2) {
  console.log("empate");
} 

// Verficar se pedra vence
else if (
  (jogada1 === "pedra" && jogada2 === "tesoura") || 
  (jogada2 === "pedra" && jogada1 === "tesoura")
) {
  console.log("pedra");
} 

// Verificar se papel vence
else if (
  (jogada1 === "papel" && jogada2 === "pedra") || 
  (jogada2 === "papel" && jogada1 === "pedra")
) {
  console.log("papel");
} 

// Eliminação 
else {
  console.log("tesoura");
}

// Imprime "pedra"
