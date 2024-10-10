let input = prompt();

let numbers = input.split(" ").map(Number);

let doubleNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log(doubleNumbers)
