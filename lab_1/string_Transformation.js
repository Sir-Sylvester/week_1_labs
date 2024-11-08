// Helper function to check if the value is a string
const isString = value => {
    if (typeof value !== 'string') {
        throw new Error('Value must be a string');
    }
};

// Function to capitalize the first letter of a string
const capitalize = str => {
    isString(str);
    if (str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Helper function to reverse a string
const reverseString = str => str.split('').reverse().join('');

// Function to reverse a string
const reverse = str => {
    isString(str);
    return reverseString(str);
};

// Function to check if a string is a palindrome
const isPalindrome = str => {
    isString(str);
    return str === reverseString(str);
};

// Function to count the number of words in a string
const wordCount = str => {
    isString(str);
    return str.trim().split(/\s+/).length;
};

// usage test
try {
    console.log(capitalize("hello")); 
    console.log(reverse("hello")); 
    console.log(isPalindrome("racecar")); 
    console.log(wordCount("Hello world! This is a test.")); 
} catch (error) {
    console.error(error.message);
}