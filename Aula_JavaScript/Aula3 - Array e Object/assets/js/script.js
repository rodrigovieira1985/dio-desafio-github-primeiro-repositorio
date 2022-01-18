// Como declarar Array
let array = ['String',1,true];
console.log(array);

console.log('###--------------------------------------###');

let arraye = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4'] ];
console.log(arraye[0]);

console.log('###--------------------------------------###');

//forEach
arraye.forEach(function(item, index){console.log(item, index)});

console.log('###--------------------------------------###');

//push insere item no final
arraye.push('novo item');
arraye.push(1);
arraye.push([]);
console.log(arraye);

console.log('###--------------------------------------###');

// pop apaga o ultimo item
arraye.pop()
console.log(arraye);

console.log('###--------------------------------------###');

// shift apaga o primeiro item
arraye.shift()
console.log(arraye);

console.log('###--------------------------------------###');


//unshift adciona item no inicio 
arraye.unshift('String Add')
console.log(arraye);

console.log('###--------------------------------------###');

//indexOf retorna o valor do indice do item 

console.log(arraye.indexOf(true));

console.log('###--------------------------------------###');

// Splice remove ou altera pelo indice
arraye.splice(0, 3);
console.log(arraye);

console.log('###--------------------------------------###');

//slice retorna uma parte do array
let arrayd =  arraye.slice(1, 5);
console.log(arrayd);

console.log('###--------------------------------------###');


//Objeto
let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno:{objectInterno: 'objectInterno'}};
console.log(object);

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayi = object.array;
console.log(arrayi);

var {string, boolean} = object;

console.log(string, boolean);


console.log('###--------------------------------------###');
