let prompt = require("prompt-sync")();
dolar = parseFloat(prompt('digite o valor que ira converter $ '))
reais = (dolar * 4.97)
console.log('Você tem U$', dolar + 'E R$', reais)
