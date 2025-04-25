function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage
  console.log(reverseString("Hello, world!")); // Output: "!dlrow ,olleH"
  

sayHello();

function sayHello(){
    console.log("Hello, world!");
}
const helloWorld = function(greeting, name) {
    return `${greeting}, ${name}!`;
}

// Example usage
console.log(helloWorld("Hello", "Joshua")); // Output: Hello, Joshua!

const numbers = [1, 2, 3, 4, 5];

console.log("1. For Loop");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("\n2. While Loop");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

console.log("\n3. Do-While Loop");
let j = 0;
do {
    console.log(numbers[j]);
    j++;
} while (j < numbers.length);

console.log("\n4. For...of Loop");
for (const num of numbers) {
    console.log(num);
}

console.log("\n5. For...in Loop (shows index)");
for (const index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

console.log("\n6. map() Loop");
const doubled = numbers.map(num => {
    console.log(`Original: ${num}, Doubled: ${num * 2}`);
    return num * 2;
});

console.log("\n7. forEach() Loop");
numbers.forEach((num, idx) => {
    console.log(`Index: ${idx}, Value: ${num}`);
});





const greet = function sayHello() {
    console.log("Hello!");
};

greet();
