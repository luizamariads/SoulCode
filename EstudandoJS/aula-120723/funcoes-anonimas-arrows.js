//function somar (n1, n2) { // entrada 
//    let soma = n1 + n2; // processamento
//    return soma; // Saída 
//}

//function dividir (num, den) {
//    if (den == 0)
//        return; // Retorno vazio é valido 
//    return (num / den);
//}

//const num = dividir (22, 0);
//console.log(num);

// callback -> função que é passado como parametro 




function requisicaoParaBanco (callbackError){
    for (let i = 0; i < 1000000000000; i++ ) {// requisição feita para o servidor (simulação) 
        if (i === 1000000){// aqui gerou um erro
            callbackError();
        }
    }
}

function erro() {
    console.log ("DEU RUIM!");
}

requisicaoParaBanco(erro);