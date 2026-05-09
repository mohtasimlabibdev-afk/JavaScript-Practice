function turnOff() {
      console.log("Turning off the device...");
      // Code to turn off the device goes here        
}
turnOff();        
function turnOn() {
      console.log("Turning on the device...");
      // Code to turn on the device goes here        
}
turnOn();

// Function Parameter, Handle Multiple Parameters

function square (lol){
      console.log(lol);
      const result = lol * lol;
      console.log(`The square of ${lol} is: ${result}`);
}
square(5);
square(10);
square(12);

// Add two numbers
function add(num1, num2){

      const sum = num1 + num2;
      console.log(`The sum of ${num1} and ${num2} is:`);
      console.log(sum);
}
add(4, 6);
add(14, 6);
add(24, 6);

// multiply two numbers
function multiply(num1, num2){
      return num1 * num2;
}
const result = multiply(5, 6);
console.log(`The multiply of 5 and 6 is: ${result}`);