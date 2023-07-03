//tipagem estatica -> Definição d um tipo a cada variavel (Java, C, C++, Typescript)
// tipagem dinamica -> O tipo da variável é definido de acordo com seu valor (JavaScript, Python)

let variavel = 22;
console.log (typeof variavel); //number

variavel = "Prof Gsbriel Braga";
console.log (typeof variavel); // string

variavel = true;
console.log (typeof variavel); // boolean 

variavel = { nome: "Gabriel", idade: 21}; //object
console.log (typeof variavel)

variavel = [1,2,3,4,5];
console.log (typeof variavel); //object

variavel = function () {return 1}
console.log (typeof variavel); // function 

variavel = undefined; //indefinido 
console.log (variavel); //undefined 

variavel = null; // nulo 
console.log (variavel); // null 

variavel = NaN; // Not a Number 
console.log (variavel); // NaN 


