'use strict';

const {get_with_license, get_with_model, get_all_models} = require('./carstorage.js');

console.log(get_with_license('1234'));

const cars = get_with_model('GT');
console.log(cars.model + ' ' + cars.license);

console.log(get_with_model('Coupe'));

for(const car of get_with_model('GT')) {
    console.log(car.model + ' ' + car.license);
}


const my_car = get_with_license('1234');
if(my_car !== null) {
    console.log(my_car.model + ' ' + my_car.license);
} else {
    console.log('Car not found');
}

console.log(get_all_models());





