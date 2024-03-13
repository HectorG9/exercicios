let prompt = require ('prompt-sync')();

n1 = parseInt(prompt('digite a nota 1: '))
n2 = parseInt(prompt('digite a nota 2: '))
n3 = parseInt(prompt('digite a nota 3: '))

media = (n1+n2+n3) /3

if(media >= 7 ){
    console.log('o aluno foi aprovado')
}
else {
    console.log('o aluno foi reprovado')
}