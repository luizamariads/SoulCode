//1.Escreva um programa que imprima os números de 1 a 20 usando um loop for.
for (let i = 1; i <= 20; i++) {
    //console.log(i);
}
//2.Escreva um programa que exiba os números de Fibonacci até o décimo termo. Os números de Fibonacci são formados pela sequência 0, 1, 1, 2, 3, 5, 8, 13, ... em que cada número é a soma dos dois anteriores. Use um loop while para gerar a sequência.
let p = 0; // penultimo
let u = 1; // ultimo
let i = 0; // contador, variavel que ta dentro do looping 
while (i < 10) {
    //console.log(p);
    let soma = p + u;
    p = u;
    u = soma;
    i++;
}



//3.Crie um programa que receba um número e calcule a soma de todos os números ímpares até esse número. Use um loop for e uma estrutura condicional if para verificar se cada número é ímpar.
let numero = 15;
let soma = 0;
for(let i = 1; i <= numero; i++){
    if (i % 2 != 0){
        soma += i;
    }
}
//console.log("Soma dos numeros impares até " + numero + " é " + soma)


//4.Faça um programa que receba um número e exiba a tabuada da soma desse número usando um loop for.
let numero1 = 7; 
for(let i = 0; i <= 10; i++){
    //console.log(numero1 + " + " + i + " = " + (numero1 + i));
}

//5.Crie um programa que exiba todos os números múltiplos de 7 de 1 a 100 usando um loop for e uma estrutura condicional if para verificar se cada número é múltiplo de 7.
let numero2 = 7;

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
    console.log(i);
    }
}

//Escreva um programa que receba um número e desenhe na tela um triângulo formado por "*".


//console.log(asteriscos);













