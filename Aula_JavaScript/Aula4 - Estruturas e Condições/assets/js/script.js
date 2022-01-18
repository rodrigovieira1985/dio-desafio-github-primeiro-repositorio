// Estrutura de Decisão
var jogador1 = 5;
var jogador2 = 3;
var placar = true;

    if(jogador1 > 0){
        console.log("Jogador 1 Fez Ponto");
    }else{
        console.log("Jogador 1 não Fez Ponto");
    }

//if ternario
jogador1 > 0 ? console.log("Jogador 1 Fez Ponto") : console.log("Jogador 1 não Fez Ponto");   


//switch
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 Ganhou");
    break;
    case placar = jogador1 < jogador2:
        console.log("Jogador 2 Ganhou");
    break;
    default:
        console.log(placar);    
}    


//for
let arrayf = ['valor1','valor2','valor3','valor4','valor5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for(let indice = 0; indice < arrayf.length; indice++){
    console.log(arrayf[indice]);
}

// for in
for(let i in arrayf){
    console.log(i);
}
// for in com object
for(i in object){
    console.log(i);
}

//for of
for(i of arrayf){
   console.log(i);
}

//for of com object não da para usar
for(i of object.propriedade1){
    console.log(i);
 }

 //While
 var a = 0;
 while(a < 10){
    console.log(a);
    a++;
 }

// Do While
var a = 10;
do{
    console.log(a);
    a++;
}while(a < 20)