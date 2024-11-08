// Helper function to validate array and its elements
const validateArray = (arr) => {
    if (!Array.isArray(arr)) throw new TypeError('Your input is not an array');
    arr.forEach(num => {
        if (typeof num !== 'number') throw new TypeError('Array must contain only numbers');
    });
};

// Function to double every number in an array
const double = (arr) => {
    validateArray(arr);
    return arr.map(num => num * 2);
};

// Function to filter out even numbers from an array
const filterEven = (arr) => {
    validateArray(arr);
    return arr.filter(num => num % 2 !== 0);
};

// Function to calculate the sum of all numbers in an array
const sum = (arr) => {
    validateArray(arr);
    return arr.reduce((acc, num) => acc + num, 0);
};

// Function to calculate the average of all numbers in an array
const average = (arr) => {
    validateArray(arr);
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
};

// usage test
const numbers = [1, 2, 3, 4, 5];
console.log(double(numbers));
console.log(filterEven(numbers));
console.log(sum(numbers)); 
console.log(average(numbers)); 
