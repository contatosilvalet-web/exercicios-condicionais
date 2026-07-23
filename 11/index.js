const rendaMensalEmCentavos = 300000; // 3.000,00 reais
const mesesDecorridos = 12; // 12 meses
const totalJaPagoPeloAluno = 1000000; // 10.000,00 reais

if (mesesDecorridos > 60) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o tempo máximo de financiamento (60 meses) foi atingido.");
} 
else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o curso já foi totalmente quitado.");
} 
else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} 
else {
    const valorParcela = (rendaMensalEmCentavos * 18) / 10000; 
    console.log(`O valor da parcela desse mês é R$ ${valorParcela} reais`);
}
