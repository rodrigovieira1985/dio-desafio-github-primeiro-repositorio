// DECLARANDO VARIAVEL E CONSTANTE
var as = 12;
const VALOR = 67;

// fUNÇÕES

function soma(a, b) {
    return a + b;
}
soma(3,5);
console.log(soma(4,5));

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par`);            
        }
    }
    console.log('Os numeros Pares são: ', evenNums);
}
let array = [1,2,4,5,7,8];
returnEvenValues(array);