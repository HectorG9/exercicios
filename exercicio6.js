/* Para converter graus Celsius em graus Fahrenheit, multiplique por 1,8 e adicione 32.

°F = °C × 1, 8 + 32

Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida por 1,8.

°C = (°F − 32) ÷ 1, 8*/

let prompt = require ('prompt-sync')();
F = parseInt(prompt('Quantos graus Farenheit? °F '))
C = (F - 32) / 1.8
console.log('A temperatura Farenheit é F°', F + ' E são', C + ' graus celsius')
