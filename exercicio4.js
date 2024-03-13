let prompt = require ('prompt-sync')();
saldo = prompt('Qual o seu saldo ? ')
reajuste = (saldo *  1 / 100)
console.log('O saldo é de R$', saldo + ' e o Reajuste é de', reajuste)