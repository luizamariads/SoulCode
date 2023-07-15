/*
//Uma quantidade determinada de repetiçÕes 
for (inicialização; condição; incrementação){}
    // repetição...
}

// Uma quantidade indeterminada de repetições 
while (condição ){
    //repetição
}
*/

//console.log("Teste 1"); 
//console.log("Teste 2"); 

//let i = 0; 
//while ( i< 10){
//    console.log("TESTE WHILE" + i); 
//    i++;
//}

//console.log("Teste 3"); 
//console.log("Teste 4"); 

// Desenha um quadrado de # na tela
let lado = 7;
let linha = "";

//for (let i =0; i < lado; i++) { 
//    let linha = "";
//    for (let j = 0; j < lado; j++){
//        linha += "# ";
//    }
//    console.log(linha);
//}


// break e continue 
//Ignora todos os impares
//for (let i = 0; i <= 20; i++) {
//    if(!(i % 2 == 0)) {
//        continue; // ignora o loop || pula o loop 
//    }
//    console.log(i);
//}


// Imprime o multiplo de 8 
for (let i = 1; i <= 100; i++) {
    if ((i % 8 == 0) && (i != 8)){
        console.log(i);
        break;
    }
}