'use strict';

const person = {
    "name": "bora",
    "lastname": "kim",
    "age": 29,
    "member": true
}

const person2 = {
    name: "bora",
    lastname: "kott",
    age: 28,
    member: true
}

const person3 = {
    name: "bora",
    lastname: "kot",
    age: 24,
    member: true,
}

console.log(person); // bora
console.log(person.name); // bora
console.log(person); // kim
console.log(Object.keys('KEYS'+person)); // kim
console.log(Object.values('VALUES'+person)); // kim
console.log(Object.entries('VALUES'+person)); // kim

for(const key of Object.keys(person)) {
    console.log(` ${key} : ${person[key]}`);
}

for(const [key, value] of Object.entries(person)) {
    console.log(` ${key} : ${value}`);
}

