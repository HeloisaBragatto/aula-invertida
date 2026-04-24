// Lista original (não será modificada)
const precos = [100, 250, 80, 320];

// map percorre automaticamente o array
// e cria um NOVO array com os valores transformados
const comDesconto = precos.map(function(preco) {
  // Para cada item, aplica a transformação
  return preco * 0.9;
});

// Resultado final
console.log(comDesconto);

// Arrow function deixa o código mais curto e legível
const comDescontoModerno = precos.map(preco => preco * 0.9);

console.log(comDescontoModerno);
