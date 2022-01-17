//tipo primitivo

//boolean
var VDuF = false;
console.log(typeof(VDuF));

// number
var valor = 1;
console.log(typeof(valor));

//String
var valor = "1";
console.log(typeof(valor));

//function
var valor = function(){}
console.log(typeof(valor));

//Declarar variavel
var valor = 'Rodrigo';
valor = 'Vieira';
console.log(valor);

let valor1 = 'Rodrigo';
valor1 = 'Vieira';
console.log(valor1);

//contante valor não pode ser alterado
const valor2 = 'Rodrigo';
console.log(valor2);

//Escopo Global(var) e LOcal(let)

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalLet = 'Local';
    console.log(escopoLocalLet);
}
escopoLocal();

//Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);
