let prompt = require ('prompt-sync')();
saldo = parseInt(prompt('Qual o seu saldo ? '))
reajuste = (saldo *  1 / 100)
Nsaldo = reajuste + saldo 
console.log('O saldo é de R$', saldo + ' e o Reajuste é de R$', reajuste + ' O novo saldo é de: ', Nsaldo)