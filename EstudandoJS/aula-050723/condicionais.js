// estruturas condicionais 
// condição -> calculo logico 
// if - se 

/*const altura = 1.58;
if (altura >= 1.60)
    console.log("Entrou no brinquedo!");
else 
console.log ("Nao entrou no brinquedo"); */

/*let niveldeingles = 4; // 1, 2, 3 ,4 5
if (niveldeingles == 1)
    console.log("Nivel iniciante");
else if (niveldeingles == 2)
    console.log("nivel basico"); 
else if ( niveldeingles == 3)
    console.log("Nivel intermediario");
else if (niveldeingles == 4)
    console.log ("Nivel avançado");
else if (niveldeingles == 5)
    console.log ("nivel avançado");
else 
    console.log ("nivel de ingles desconhecido");*/

//let saldo = 50;
//if (saldo > 100)
//    console.log ("comprar um livro");

//else if (saldo > 200)
//    console.log ("comprar um tenis");

//else if (saldo > 1000)
//    console.log ("comprar uma bolsa");

//let opcao = "arquivo";

// Escopo -> Bloco de código
/*let conseguiufazercompra = false;
let saldo = 0;
if (saldo > 200) {
    console.log("Fez a compra do tenis");
    conseguiufazercompra = true;
}

else {
    console.log ("sem grana o suficiente")
    conseguiufazercompra = false;
}

if (conseguiufazercompra) {
    console.log ("conseguiu fazer compra!")*/


/*let num1 = 90, num2 = 120, num3 = 300;
if(num1 > num2 && num3) {
    if (num2 > num3 ){
        console.log (num1 + " > " + num2 + " > " + num3); // num1 > num2 > num3
    }
    else {
        console.log (num1 + " > " + num3 + " > " + num2); // num1 > num3 > num2
    }
}
else if (num2 > num1 && num2 > num3){
    if(num1  > num3){
        console.log (num2 + " > " + num1 + " > " + num3); // num2 > num1 > num3
    }
    else {
        console.log (num2 + " > " + num3 + " > " + num1); // num2 > num3 > num1
    }
}

else {
    if ( num1 > num2) {
        console.log(num3 + " > " + num1 + " > " + num2); // num3 > num1 > num2
    }
    else {
        console.log (num3 + " > " + num2 + " > " + num1); // num3 > num2 > num2
    }
} */

let mes = 20 ;
if (mes == 1) {
    console.log("janeiro");
} else if (mes == 2) {
    console.log ("fevereiro");
}  else if (mes == 3) {
    console.log ("março");
}  else if (mes == 4) {
    console.log ("abril");
} else if (mes == 5) {
    console.log ("maio");
} else if (mes == 6) {
    console.log ("junho");
}else if (mes == 7) {
    console.log ("julho");
} else if (mes == 8) {
    console.log ("agosto");
} else if (mes == 9) {
    console.log ("setembro");
} else if (mes == 10) {
    console.log ("outubro");
} else if (mes == 11) {
    console.log ("novembro");
} else if (mes == 12) {
    console.log ("dezembro");
} 
else {
    console.log ("este mes não existe");
}

switch(mes){
    case 1:
        console.log ("janeiro");
        break; // para o break do switch
    case 2:
        console.log("fevereiro")
        break;
    case 3:
        console.log ("Março")
        break;
    case 4:
        console.log("abril")
        break;
    case 5:
        console.log ("maio")
        break;
    case 6:
        console.log("junho")
        break;
    case 7:
        console.log ("julho")
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log ("setembro")
        break;
    case 10:
        console.log("outubro")
        break;
    case 11:
        console.log ("novembro")
        break;
    case 12:
        console.log("dezmebro")
        break;
    default:
        console.log ("este mes nao existe")

}