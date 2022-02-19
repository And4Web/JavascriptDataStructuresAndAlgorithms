//problem6: space complecity for a function to find sum of all the elements of an arraay:

const array = [2, 3, 4, 1, 6, 8, 5];

function sumArr(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sumArr(array));
