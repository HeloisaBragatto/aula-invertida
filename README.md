## Higher-Order Function
Uma Higher Order Function (Função de Alta Ordem) é uma função que recebe outra função como argumento, ou que retorna outra função como resultado.

## Map
O map() é uma Higher-Order Function utilizada para transformar coleções de dados. Ele percorre cada elemento do array original, aplica uma função de transformação e devolve um novo array com os resultados, sem modificar o original.

## Como Funciona
O método recebe uma função callback como parâmetro, que é chamada uma vez para cada elemento do array e pode receber até três argumentos:
1- Elemento — o valor do item atual sendo processado;
2- Índice — a posição do item no array (opcional);
3- Array original — o array completo que está sendo percorrido (opcional).


## A diferença entre o for e o map()
O for executa um bloco de código repetidamente, geralmente alterando variáveis externas ou arrays já existentes — o que chamamos de mutação.
Já o map() aplica uma função de transformação a cada elemento do array e retorna uma nova lista de mesmo tamanho com os resultados, sem alterar a original.
