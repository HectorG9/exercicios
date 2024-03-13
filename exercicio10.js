let prompt = require ('prompt-sync')();
n1 = parseInt(prompt('digite um valor: '));
if (n1 >= 1) {
    console.log('valor e positivo', n1); 
} 

else if (n1 < 0 ){
    console.log('O valor é negativo');
}    
else {
    console.log('O valor é zero')
}
