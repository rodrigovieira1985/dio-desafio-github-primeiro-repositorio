//THIS
//Palavra reservada para o contexto
//Methodo = sempre que uma função esta dentro de um objeto

const pessoa = {
    firstName : 'Rodrigo',
    lastName  : 'Vieira',
    id        : 1,
    fullName  : function() {
        return this.firstName + " " + this.lastName;
    },
    getID     : function() {
        return this.id;
    }

};  
console.log(pessoa.fullName());
console.log(pessoa.getID());
console.log('#############################');

//This Fora de função
console.log(this);
console.log('#############################');
//This Dentro da função
(function () {
    console.log(this);
})();
console.log('#############################');

//THIS Dentro de um Objeto
const pessoas = {
    firstName   : 'Rodrigo',
    lastName    : 'Vieira',
    getFullName : function () {
        console.log(`${this.firstName} ${this.lastName}`)
    },
};
pessoas.getFullName()
console.log('#############################');

//This com CALL
const person = {
    nome : 'Rodrigo',
};

const animal = {
    nome : 'Spyke',
};

function getSomething() {
    console.log(this.nome)
}

getSomething.call(person);
getSomething.call(animal);
console.log('#############################');

//This com Call e Argumentos(paramentros)
const myObj = {
    nums1 : 2,
    nums2 : 4
};

function somarr(a, b) {
    console.log(this.nums1 + this.nums2 + a + b);
}
somarr.call(myObj, 1, 5);
console.log('#############################');

//This com Apply
const pessoa1 = {
    nome1 : 'Rodrigo'
}

const animal1 = {
    nome1 : 'Spyke'
}

function getSomething2(){
    console.log(this.nome1)
}

getSomething2.apply(pessoa1)
console.log('#############################');

const myObj1 = {
    nums1 : 2,
    nums2 : 4
};

function somarr1(a, b) {
    console.log(this.nums1 + this.nums2 + a + b);
}
somarr1.apply(myObj1, [1, 5]);
console.log('#############################');

//This com BIND
const retornaNomes = function () {
    return this.nome;
};

let rodrigo = retornaNomes.bind({nome: 'Rodrigo'});

console.log(rodrigo());
console.log('#############################');