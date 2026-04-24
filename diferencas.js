const numeros = [1, 2, 3];

// MAP (funcional)
// Não altera o array original
// Retorna um novo array
const dobrados = numeros.map(n => n * 2);

// FOR (imperativo)
// Precisa criar um array manualmente
// Modifica o estado com push
const dobradosFor = [];
for (let i = 0; i < numeros.length; i++) {
  dobradosFor.push(numeros[i] * 2);
}
