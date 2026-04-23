const precos = [100, 250, 80, 320];

const comDesconto = precos.map(function(preco) {
  return preco * 0.9;
});

console.log(comDesconto);