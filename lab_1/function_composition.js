// Compose function
const compose = (...fns) => (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);

// Example functions
const reverseString = (str) => str.split('').reverse().join('');
const capitalizeString = (str) => str.toUpperCase();
const doubleEvenNumbers = (arr) => arr.map(num => num % 2 === 0 ? num * 2 : num);

// Composed functions
const reverseAndCapitalize = compose(capitalizeString, reverseString);
const doubleEvens = compose(doubleEvenNumbers);

// Usage examples
const str = "hello world";
const arr = [1, 2, 3, 4, 5, 6];

console.log(reverseAndCapitalize(str)); // Output: "DLROW OLLEH"
console.log(doubleEvens(arr)); // Output: [1, 4, 3, 8, 5, 12]