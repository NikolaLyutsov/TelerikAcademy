/* globals console */

let factorial = function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

console.log(factorial(5));

let fact = factorial;
console.log(fact(5));

factorial = function() {
    return "NOT FACTORIAL";
};

console.log(fact(5));