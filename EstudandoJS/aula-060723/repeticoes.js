// Estruturas de repteção 

//console.log (1)
//console.log (2)
//.. 
//console.log (10)

// Incrementa o valor de numero em uma unidade
console.log ("=============================")
for (let numero = 0; numero < 10; numero++){
    //console.log(numero);
} 

// incrementa o valor de numero em duas unidades
console.log ("=============================")
for (let numero = 0; numero < 10;  numero += 2){
    //console.log(numero);
} 

// Decrementa o valor de numero em uma unidade (contagem regressiva)
console.log ("=============================")
for (let numero = 10; numero >= 0;  numero-- ){
    //console.log(numero);
} 


// for (atribuição; condição; reatribuição) { 
    // codigo de repetição 
//}

/* jeito ërrado
let numero = 0;
for (; numero < 100;) {
    numero++
    console.log (numero);
} */


for (let numero = 0; numero <= 100;) {
    numero++;
    console.log (numero);
}

// loop inifinito
let n = 0
while (n < 17) {
    console.log ("SoulCode + Porto")
    n++;
}  

// for -> Uma quantidade de repetições determinadas 
// while -> Uma quantidade de repetiçoes indeterminadas 

let num = 80;
let Eprimo = false;
for(let i = 2; i < num; i++){
    if (num % i == 0){
        Eprimo = false;
    }
}

if(Eprimo) {
    console.log("É primo");
}
else { 
    console.log ("nao é primo");
}