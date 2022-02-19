// //problem1: function to add upto n numbers including the nth number:
// //solution no.1:

// function addUpTo1(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// let t1 = performance.now();
// console.log(addUpTo1(5), ", ", t1);

// //solution no.2:

// // function addUpTo2(n) {
// //   return (n * (n + 1)) / 2;
// // }
// // let t2 = performance.now();
// // console.log(addUpTo2(5), ", ", t2);

//problem2: function to count up and down:

// function countUpAndDown(n) {
//   console.log("Going Up!");
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
//   console.log("At the top, Now going down");
//   for (let j = n; j >= 0; j--) {
//     console.log(j);
//   }
//   console.log("Back down. Bye");
// }
// countUpAndDown(30);

////problem3: function to print pairs:

// function printAllPairs(n) {
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       console.log(i, j);
//     }
//   }
// }
// printAllPairs(1);

//problem4: function to log at least upto 5:

// function logAtLeast5(n) {
//   for (let i = 1; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }
// logAtLeast5(2);

//problem5: function to log upto 10 atmost:

// function logAtMost10(n) {
//   for (let i = 1; i <= Math.min(10, n); i++) {
//     console.log(i);
//   }
// }
// logAtMost10(11);

//problem6: space complecity for a function to find sum of all the elements of an arraay:

// const array = [2, 3, 4, 1, 6, 9, 5];

// function sumArr(arr) {
//   let total = 0;
//   for (i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(sumArr(array));

//problem7: function to double each element of an array:

const arr1 = [1, 2, 3, 4];

function doubleArr(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(2 * arr[i]);
  }
  return arr2;
}
console.log(doubleArr(arr1));
