//Arrow Function
const helloWorld1 = function(){
    return "Hello World1";
}

const helloWorld2 = () => {
    return "Hello World2";
}

const helloWorld3 = () => "Hello World3";

console.log(helloWorld1);
console.log(helloWorld2);
console.log(helloWorld3);


const soma1 = (a, b) => a +b;
console.log(soma1(5, 4));

const soma2 = a => a ;
console.log(soma2(5));

//Arrow Function não faz hosting então ele não pode ser chamada antes da declaração
//console.log(soma3(5, 4));
//const soma3 = (a, b) => a +b;

//Arrow Function não consegue utilizar CALL, BIND, APPLY, NÃO existe o objeto arguments, e não pode usar construtor (ex: NEW myObject)