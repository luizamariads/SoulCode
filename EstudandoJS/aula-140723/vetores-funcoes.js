const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7];
console.log(nums);

nums.push (4); // adiciona um elemento ao final do vetor 
console.log(nums);

nums.unshift(9); // adiciona um elemento no final do vetor 
console.log(nums);

nums.pop(); // remove um elemento no final do vetor 
console.log(nums);

nums.shift (); // remove um elemento do inicio do vetor 
console.log(nums);

let juncao = nums.join("-"); // fazer a junção dos elementos do vetor 
console.log();

let vetor2 = [ 5, 6, 7];
let vetor3 = nums.concat(vetor2); // gera um novo vetor concatenando 
console.log (vetor3);

//nums.push(100, 101, 110, 1000);
const nome = ["Beatriz", "Diego", "Adriano", "Gustavo", "Vitor", "Aline"];
console.log(nome.sort()); // ordena o vetor na ordem alfabetica (modifica o vetor)

console.log(nums.reverse()); // gera um novo vetor com elementos do vetor na ordem reversa (modifica o vetor)

console.log(nums.includes(10)); // retorna um boolean

//console.log(nums.fill(0)); // preenche todos os elementos com 0 (modifica o vetor)
//console.log(nums.fill(7, 2, 4)); // preenche com 7 de 2 a 4 (modifica o vetor)

console.log(nums.indexOf(3)); // retorna o indice do primeiro elemento do vetor 

console.log(nums);
console.log (nums.splice(6, 3)); // remove elemento do meio do vetor (modifica o vetor)
console.log(nums);

console.log(nums.slice(2, 5)); //recorta um vetor do indice 2 a 5-1 (não modifica o vetor)

nums.forEach(num => console.log(num)); // itera sobre os elementos do vetor 

// reduce -> Efetuar a redução dos valores do vetor em um valor acumulativo 
console.log("------- reduce ---------");
console.log(nums.reduce((acumulador, num) => (acumulador + num), 0));

console.log ("------ map -------");
console.log(nums.map(num => num * 2)); // multiplica todos os valores por 2 e gera um novo vetor 

console.log("---- find ----");
console.log (nums.find(num => (num > 8))); // retorna o primeiro valor que corresponde a condição especificada 

console.log(nums.filter(num => (num %2 == 0))); //retorna um valor com elementos que correspondem a condição 

const names = [
    "João Silva",
    "Maria Santos",
    "Pedro Almeida",
    "Ana Oliveira",
    "Carlos Sousa",
    "Mariana Costa",
    "José Pereira",
    "Camila Gomes",
    "Antônio Rodrigues",
    "Luiza Sousa",
    "Fernando Lima",
    "Amanda Barbosa",
    "Rafael Carvalho",
    "Isabela Castro",
    "Francisco Pereira",
    "Laura Rocha",
    "Ricardo Cardoso",
    "Letícia Ribeiro",
    "Daniel Santos",
    "Lúcia Oliveira",
    "Rodrigo Alves",
    "Patrícia Costa",
    "Gustavo Ferreira",
    "Sofia Sousa",
    "Marcelo Silva",
    "Beatriz Rocha",
    "André Castro",
    "Carolina Souza",
    "Gabriel Braga",
    "Natália Sousa"
];

console.log(names.find(nome => nome.includes("Rocha"))); // Laura Rocha
console.log(names.filter(nome => nome.includes("Sousa"))); // todos com Sousa
console.log(names.filter(nome => !nome.includes("Letícia"))); // todos menos Leticia

// String como Vetor
let name = 'Prof. Gabriel Braga';
let idade = 21;
let mensagem = `Nome: ${nome}\nIdade: ${idade}`; // interpolação
console.log(mensagem);

console.log(nome[2]); // perfeitamente válido -> retorna "o"

console.log("O pessoa com nome \"Vitor\" está esperando você na recepção.");