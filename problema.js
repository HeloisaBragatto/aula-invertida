// CÓDIGO IMPERATIVO — "o paciente"

// Lista original de preços
const precos = [100, 250, 80, 320];

// Criamos um array vazio (estado mutável)
const comDesconto = [];

// Loop manual para percorrer o array
for (let i = 0; i < precos.length; i++) {
  // Calcula o novo preço com 10% de desconto
  const novoPreco = precos[i] * 0.9;

  // Modifica o array adicionando um novo valor
  comDesconto.push(novoPreco);
}

// Resultado final
console.log(comDesconto); // [90, 225, 72, 288]
