const numeros = [1, 2, 3];

// Com MAP (Funcional) - Mais limpo
const dobrados = numeros.map(n => n * 2);

// Com FOR (Imperativo) - Mais "manual"
const dobradosFor = [];
for (let i = 0; i < numeros.length; i++) {
  dobradosFor.push(numeros[i] * 2);
}
