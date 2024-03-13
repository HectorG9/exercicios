let prompt = require ('prompt-sync')();
C = parseInt(prompt('Quantos graus celsius ? °F '))
F = (C * 1.8) + 32
console.log('A temperatura Farenheit é F°', F + ' E são', C + ' graus celsius')
