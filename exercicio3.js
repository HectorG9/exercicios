let prompt = require ('prompt-sync')();
reais = parseFloat(prompt('digite o valor que ira converter R$ '))
dolar = (reais / 4.97)
console.log('Você tem U$', reais + ' E R$ ', dolar + ' dolar ')
