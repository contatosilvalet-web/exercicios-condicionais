const tipoDePagamento = "credito";
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    desconto = 0.05; 
} else if (tipoDePagamento === "cheque") {
    desconto = 0.03; 
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    desconto = 0.10; 
}

const valorFinalEmCentavos = valorDoProduto - (valorDoProduto * desconto);

const valorFinalReais = (valorFinalEmCentavos / 100).toFixed(2);

console.log(`Valor a ser pago: R$${valorFinalReais}`);

// Imprime "Valor a ser pago: R$123.50"

/* Exemplos
const tipoDePagamento = "dinheiro";
const valorDoProduto = 13000;
Imprime "Valor a ser pago: R$117.00"

const tipoDePagamento = "cheque";
const valorDoProduto = 13000;
Imprime "Valor a ser pago: R$126.10"
*/
