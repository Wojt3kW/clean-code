/* eslint-disable */

// Array of numbers
const numbers1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers2: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

// Arrow Functions () => {}
// Example 1
function sayHelloFn(name: string): void {
  console.log('Hello', name);
}

const sayHello = (name: string): void => console.log('Hello', name);

// Example 2
function add(number1: number, number2: number): number {
  return number1 + number2;
}
const addNumbers = (number1: number, number2: number): number => number1 + number2;

// Short-circuit Evaluation

// Example 1
const value1: string = 'Hello, World!';
if (value1 === null || value1 === undefined || value1 === '') {
  console.log('VARIABLE NOT FOUND!');
} else {
  console.log(value1);
}

console.log(value1?.length > 0 || 'VARIABLE NOT FOUND!');

// Example 2
const person: { firstName: string; lastName: string } = {
  firstName: 'John',
  lastName: 'Doe',
};
const firstName = person && person.firstName;

// Avoid boring old for loop
const list = [2, 5, 7, 2, 6, 2, 3, 5];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

list.forEach(number => console.log(number));
