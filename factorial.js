// find the factorial of a number

const number = 5;

if (number < 0) {
  console.log("Factorial of a negative number is not possible");
} else if (number === 0) {
  console.log("Factorial of 0 is 1");
} else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}`);
}
