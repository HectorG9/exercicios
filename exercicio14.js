let prompt = require ('prompt-sync')();

n1 = parseInt(prompt('digite um valor: '));
n2 = parseInt(prompt('digite outro valor: '));
n3 = parseInt(prompt('digite o ultimo valor: '));

if(n1 > n2 & n1 > n3) {
    console.log('O maior é', n1);
}
else if (n2 > n1 & n2 > n3) {
    console.log('O maior é', n2);
}
else {
    console.log('O maior é', n3);
}