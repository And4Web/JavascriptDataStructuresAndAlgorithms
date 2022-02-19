// function to double each element of an array:

const arr1 = [1, 2, 3, 4];

function doubleArr(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(2 * arr[i]);
  }
  return arr2;
}
console.log(doubleArr(arr1));
