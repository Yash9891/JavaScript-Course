let b = 35;
console.log(b); // Output: 35
console.log(b + 56); // Output: 91

try {
    console.log(c + 56); // This will throw an error
} catch (error) {
    console.log("Oops! Error:"); // Output: Oops! Error: ReferenceError: c is not defined
}
