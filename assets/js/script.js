"use strict"

let months = ["Yanvar", "Fevral", "Mart", "Aprel",];

let indexOfMonths = (months) => {
    let array = [];
    
    for (let i = 0; i < months.length; i++) {
        let number = i + 1;
        let value = months[i] + " - " + number;
        array.push(value);
        
    }
    return array;
}

console.log(indexOfMonths(months));