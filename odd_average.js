/*
 give me the average in the odd numbers of Array
*/
function oddAverage(numbers) {
      for(const number of numbers){
            if(number % 2 === 1){
                  console.log(number);
      }
}
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is', avg);