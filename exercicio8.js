let prompt = require ('prompt-sync')();

salario = parseInt(prompt('qual seu salario ?'))
aumentoS = (salario * 6.97 / 100)
Nsalario = salario + aumentoS
console.log('o seu salario e R$', salario + ' O aumento é de (6.97%) em reais R$', aumentoS)
console.log('O novo salário é: ', Nsalario)