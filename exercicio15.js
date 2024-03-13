console.log('===================CARDÁPIO==================')
let prompt = require('prompt-sync')();
let pos;
console.log('1 - Pizza com Coca Cola, 2 - Hamburguer e Fritas + Guaraná, 3 - Cachorro quente + Fanta Uva')
pos = parseInt(prompt('Digite uma combinação: '))
switch(pos) {
    case 1: 
        console.log('Você Escolheu o combo1: ');
        break;
    case 2: 
        console.log('Você escolheu o combo2: ');
        break;
    case 3: 
        console.log('Você escolheu o combo3:');
        break;
    default:
        break;
}
console.log('=============================================')