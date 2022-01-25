// MAP uma coleção de arrays no formato [chave, valor] 
const myMap = new Map()

myMap.set('apple', 'fruit');
myMap.get('apple');
myMap.delete('apple');
myMap.get('apple');
console.log(myMap);

// MAP vs FOREACH
const arrayM = [1, 2, 3, 4, 5];
console.log(arrayM.map((item) => item * 2));

const arrayE = [1, 2 ,3 ,4 ,5];
console.log(arrayE.forEach((item) => item * 2));
