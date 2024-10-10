let input = prompt();

let numbers = input.split(",").map(Number);

var evenNumbers = numbers.filter(function (num) {
    return num % 2 == 0;
})

console.log(evenNumbers)
