//Set São estruturas que armazenagem apenas valores unicos

const myArray1 = [1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 8 ];

const mySet1 = new Set(myArray1);

console.log(mySet1);
console.log('######################################');

const mySet2 = new Set();
mySet2.add(1);
mySet2.add(5);
mySet2.delete(5);
console.log(mySet2.has(1));
console.log(mySet2.has(3));

console.log(mySet2);