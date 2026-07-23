const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorProdutoReais = valorDoProduto / 100;

const valorParcela = valorProdutoReais / quantidadeDoParcelamento;

const parcelasPagas = valorPago / valorParcela;

const parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela}`);

// Imprime "Restam 7 parcelas de R$100"

/* Exemplos
const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 500;
"Restam 5 parcelas de R$100"

const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 100;
"Restam 9 parcelas de R$100"

const valorDoProduto = 120000;
const quantidadeDoParcelamento = 12;
const valorPago = 900;
"Restam 3 parcelas de R$100" */
