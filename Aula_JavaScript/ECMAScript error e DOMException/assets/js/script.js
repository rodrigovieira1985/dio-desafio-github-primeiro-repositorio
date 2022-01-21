//Object Error do ECMAScript (Erro e tempo de execução  quando o script esta em execução e encontra algum erro)
//Composto Por Mensagenm; Nome; Linha; Call Stack
//let soma = a + 2;
//ReferenceError: a is not defined


//DOMException (Erro do DOM) erros referente da estrutura da sua arvore de elementos da sua pagina da Web 


//Return e Throw (O return vai retornar uma string ('String Invalida') e o Throw vai retornar um erro)
function verificaPalindromo1(string) {
    if (!string) return 'String Invalida';
    return string === string.split('').reverse().join('');
} 
console.log(verificaPalindromo1('kaiak'));
console.log(verificaPalindromo1('cat'));
console.log(verificaPalindromo1());
console.log(verificaPalindromo1(''));
console.log('#########################################');

function verificaPalindromo2(string) {
    if (!string) throw 'String Invalida';
    return string === string.split('').reverse().join('');
} 
console.log(verificaPalindromo2('kaiak'));
console.log(verificaPalindromo2('cat'));
//console.log(verificaPalindromo2());
//console.log(verificaPalindromo2(''));
console.log('#########################################');

//Try Catch Verifica se no trecho do codigo tem algum tipo de erro

function verificaPalindromo3(string) {
    if (!string) throw 'String Invalida';
    return console.log(string === string.split('').reverse().join(''));
} 

function tryCatchExemplo1(string){
    try{
        verificaPalindromo3(string)
    }
    catch(e){
        console.log(e)
    }
}
tryCatchExemplo1('kaiak');
tryCatchExemplo1('');
console.log('#########################################');


function verificaPalindromo4(string) {
    if (!string) throw 'String Invalida';
    return console.log(string === string.split('').reverse().join(''));
} 

function tryCatchExemplo2(string){
    try{
        verificaPalindromo4(string)
    }
    catch(e){
        throw e;
    }
}
tryCatchExemplo2('kaiak');
//tryCatchExemplo2('');
console.log('#########################################');

//Finally é uma instrução que vai ser chamada em caso de erro ou não
function verificaPalindromo5(string) {
    if (!string) throw 'String Invalida';
    return console.log(string === string.split('').reverse().join(''));
} 
function tryCatchExemplo3(string){
    try{
        verificaPalindromo5(string)
    }
    catch(e){
        throw e;
    }
    finally {
        console.log('A string Enviada Foi: ' + string);
    }
}
tryCatchExemplo3('kaiak');
tryCatchExemplo3('');
console.log('#########################################');
