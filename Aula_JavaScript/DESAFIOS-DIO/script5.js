let lines = gets().split("\n");
let line = lines.shift().split(' ');

//continue o seu código aqui
let t1 = parseInt(line[0]);
let t2 = parseInt(line[1]);
let result = t1 * t2
console.log(result)


// Na geometria Euclidiana, um polígono regular é um polígono em que todos os ângulos são iguais e todos os lados tem o mesmo comprimento. Um polígono simples é aquele cujos segmentos de reta não se interceptam. Abaixo pode-se ver vários mosaicos feitos por polígonos regulares.

// Você deve escrever um programa que, dados o número e o comprimento dos lados de um polígono regular, mostre seu perímetro.

// Entrada
// A entrada tem dois inteiros positivos: N e L, que são, respectivamente, o número de lados e o comprimento de cada lado de um polígono regular (3 ≤ N ≤ 1000000 and 1 ≤ L ≤ 4000).

// Saída
// A saída é o perímetro P do polígono regular em uma única linha.