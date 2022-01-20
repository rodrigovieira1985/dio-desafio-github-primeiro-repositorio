//AutoInvocaveis

(
    function() {
        let lastname = 'Vieira';
        console.log(`Rodrigo ${lastname}`);
        nomes();
    }
)();

function nomes(){
    console.log('Chamou Função Nomes');
}

const somar = (
    function(a, b){
        return a + b;
    }
)(4, 5);

console.log(somar);

//CallBacks
const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}
const soma = function(num1, num2){
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2;
}
const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSoma);
console.log(resultSub);

//Funções Anonimas
const sum = function(a, b){
    return a + b;
}
console.log(sum(1,3));
console.log(sum(6,3));