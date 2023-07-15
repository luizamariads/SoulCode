//vetores - arrays
let nota = 9.6; // variaveis simples
let notas = [6.5, 7.8, 9.0]; // variaveis composta
let tomes = ["Bota fogo", "Gremio", "Flamengo", "Fluminense"];
let ativados = [true, false, false, true];
let daniel = ["Daniel", 23, "Ensino superior", true]; // uma má pática 

//console.log(typeof nota); //number
//console.log(typeof notas); //object
//console.log(notas.length); // tamanho do vetor 

let pesos = [89.5, 60.0, 45.4, 67.0, 75.3]; // estrutura indexada 
//console.log(pesos.length);
//console.log(pesos[0]); // indice -> numero que reoresenta a posição do elemento começa de "0"
//console.log(pesos[0] + pesos [1]);
//console.log(pesos);

for(let i = 0; i < pesos.length; i++) {
    console.log(pesos[i]); // interar sobre o vetor 
}

let operacoes = [ // vetores de funções 
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2
];

// console.log(operacoes[0] (3, 4)); // totalmente valido 
console.log(pesos);
pesos[2] = 54.4;
console.log(pesos);