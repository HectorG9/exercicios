let prompt = require ('prompt-sync')();
produto = parseFloat(prompt('Qual o valor do Produto? R$'))
reajuste = (produto * 33.33 / 100)
Nproduto = reajuste + produto
console.log('O Valor do produto é R$', produto + ' O reajuste é R$', reajuste)
console.log('O novo valor reajustado R$', Nproduto)