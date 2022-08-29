//surendra@blockgemini.com

//anshhq@gmail.com
import findFibs from "./fib.js";
import getUnique from "./unique.js";
// //Write a function to find non-repetitive numbers, that are only once in a given array.
// const Input = [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5];
// // Output: [9, 1]
// function getUnique(array) {
//   var l = array.length,
//     i,
//     j,
//     unique = [];

//   for (i = 0; i < l; i++) {
//     for (j = 0; j < l; j++) {
//       if (i === j) {
//         continue;
//       }
//       if (array[i] === array[j]) {
//         break;
//       }
//     }
//     if (j === l) {
//       unique.push(array[i]);
//     }
//   }
//   return unique;
// }

console.log(getUnique([2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5]));

// Write a function to generate Fibonacci series where maximum number is less than or equal to n.
// For example, if n is 50 then Fibonacci series is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// For example, if n is 100 then Fibonacci series is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// For example, if n is 5 then Fibonacci series is [0, 1, 1, 2, 3, 5]
// function findFibs(num) {

//     if (num < 2) {
//       return [1,1];
//     } else {
//       var fibs = findFibs(num - 1)
//       if ((fibs[fibs.length - 1]) < num) {
//         let toPush = fibs[fibs.length - 1] + fibs[fibs.length - 2];
//         toPush < num ? fibs.push(toPush) : 0;
//       }
//       return fibs;
//     }
//   }

console.log(findFibs(100));
