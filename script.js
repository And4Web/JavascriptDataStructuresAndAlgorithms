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

//function to count up and down:

function countUpAndDown(n) {
  console.log("Going Up!");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the top, Now going down");
  for (let j = n; j >= 0; j++) {
    console.log(j);
  }
  console.log("Back down. Bye");
}
countUpAndDown();

//// function to print pairs:

// function printAllPairs(n) {
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       console.log(i, j);
//     }
//   }
// }
// printAllPairs(1);
