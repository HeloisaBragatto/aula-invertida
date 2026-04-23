// CÓDIGO IMPERATIVO — "o paciente"
const precos = [100, 250, 80, 320];
const comDesconto = [];

for (let i = 0; i < precos.length; i++) {
  const novoPreco = precos[i] * 0.9;
  comDesconto.push(novoPreco);
}

console.log(comDesconto); // [90, 225, 72, 288]