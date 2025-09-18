// truthy and falsy values in JavaScript
// falsy--> false, 0, "", null, undefined, NaN, document.all
// truthy--> true, 1, "hello", [], {}, function(){}

// default rest and spread
// default parameters
// function add(a = 0, b = 0) {
//   return a + b;
// }
// console.log(add(5)); // 5
// like default way of giving pararmerters values and arguments

// rest parameters
// function sum(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5)); // 15
// it takes all the arguments and put them in an array

// spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]
// it takes all the elements of an array and put them in another array
// function to get grade based on score
