let input = prompt();

let numbers = input.split(";").map(Number);

// let sums = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0);

const initialValue = 0;

const sums = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sums)
