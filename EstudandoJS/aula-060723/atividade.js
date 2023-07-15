//1.Escreva um programa que verifique se um número é positivo, negativo ou zero e exiba uma mensagem correspondente.
let num = -4;
if (num > 0) {
    console.log ("É positivo");
} else if  (num < 0) { 
    console.log ("É negativo");
} else  {
    console.log ("É igual a zero");
}
//2.Crie um programa que solicite a idade de uma pessoa e verifique se ela é maior de idade (18 anos ou mais) ou menor de idade.
let idade = 17;

if (idade >= 18) {
    console.log ("É maior de idade");
} else {
    console.log ("É menor de idade");
}

//3.Escreva um programa que receba tres números e determine qual deles é o maior.


//4.Crie um programa que receba dois números e verifique se ele é par ou ímpar.
let num3 = 5;
let num4 = 4;
let produto = num3 * num4;

if(produto %2 == 0) {
    console.log ( "O produto de " + num3 + " * " + num4 + " é par"); 
} else { 
    console.log ("O produto de " + num3 + " * " + num4 + " é impar");
} 

//5.Escreva um programa que solicite o nome de um dia da semana e exiba se é um dia útil ou um fim de semana.
let diadasemana = "sabado"; 

if(diadasemana == "segunda" || diadasemana == "terca" || diadasemana == "quarta" || diadasemana == "quinta" || diadasemana == "sexta"   ){
    console.log ("É um dia util");
} else if (diadasemana == "sabado" || diadasemana == "domingo" ) {
    console.log ("Não é um dia útil");
} else {
    console.log ("Digite apenas segunda, terca, quarta, quinta, sexta, sabado ou domingo");
}
//6.Faça um programa que solicite um número de 1 a 7 e exiba o dia da semana correspondente (1 - domingo, 2 - segunda-feira, etc.).
let dia = 7; 

switch (dia) {
    case 1: 
        console.log ("domingo")
        break; 
    case 2: 
        console.log ("segunda")
        break;
    case 3: 
        console.log ("terça")
        break;
    case 4: 
        console.log ("quarta")
        break;
    case 5: 
        console.log ("quinta")
        break;
    case 6: 
        console.log ("sexta")
        break;
    case 7: 
        console.log ("sabado")
        break;
    default:
        console.log ("Digite apenas de 1 a 7"); 
}

