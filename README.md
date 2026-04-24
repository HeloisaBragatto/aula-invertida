Nomes:
Anna Heloisy, 
Beatriz Abreu Bom, 
Beatriz Freire, 
Glauciele Rossi, 
Heloisa Bragatto, 
Rodrigo Gabriel, 
Ryan dos Santos, 
Sofia Rovaron, 
Yasmin Costa.

## Higher-Order Function
Uma Higher Order Function (Função de Alta Ordem) é uma função que recebe outra função como argumento, ou que retorna outra função como resultado.

Esse tipo de função é muito utilizado no paradigma funcional, pois permite criar códigos mais reutilizáveis, organizados e expressivos.

## Map
O map() é uma Higher-Order Function utilizada para transformar coleções de dados. Ele percorre cada elemento do array original, aplica uma função de transformação e devolve um novo array com os resultados, sem modificar o original.

## Como Funciona
O método recebe uma função callback como parâmetro, que é chamada uma vez para cada elemento do array e pode receber até três argumentos:
1- Elemento — o valor do item atual sendo processado;
2- Índice — a posição do item no array (opcional);
3- Array original — o array completo que está sendo percorrido (opcional).

## Imutabilidade
No paradigma funcional, evitamos modificar dados existentes. O map() segue esse princípio, pois cria um novo array sem alterar o original, tornando o código mais seguro, previsível e fácil de manter.

## Execução
### For
- Criamos um array vazio
- Vamos adicionando valores com push
- Modificamos o estado ao longo do tempo
### Map
- Um novo array é criado automaticamente
- O resultado final é retornado pronto

## A diferença entre o for e o map()
O for executa um bloco de código repetidamente, geralmente alterando variáveis externas ou arrays já existentes — o que chamamos de mutação.
Já o map() aplica uma função de transformação a cada elemento do array e retorna uma nova lista de mesmo tamanho com os resultados, sem alterar a original.
