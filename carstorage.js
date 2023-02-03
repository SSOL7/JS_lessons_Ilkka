'use strict';

const cars = [
    {"model": "GT",
    "license": "1234"
    },
    {
    "model": "Coupe",
    "license": "123"
    },
    {
    "model": "Sedan",
    "license": "12"
    },
    {
    "model": "S",
    "license": "1"
    }
];

function get_with_license(license) {
    for(const car of cars) {
        if(car.license === license) {
            return car;
        }
    }
    return null
}

function get_with_model(model) {
    const cars_found = [];
    for(const car of cars) {
        if(car.model === model) {
            cars_found.push(car);
        }
    }
    return cars_found;
}

function get_all_models() {
    const models = [];
    for(const car of cars) {
        if(!models.includes(car.model)) {
            models.push(car.model);
        }
    }
    return models;
}

module.exports = {
    get_with_license,
    get_with_model,
    get_all_models
}

