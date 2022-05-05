/*
1. Arrays:

-> insertiion order is kept.
-> element access via index.
-> iterable.
-> size(length) adjusts dynamically.
-> duplication is allowed.
-> mix types.
-> deletion and finding elements can require extra work.

*/

const names = ["Max", "manu", "ramesh", "shweta"];

console.log(names[1]);
console.log(names.length);

//iteration:

for (let el of names) {
  console.log(el);
}

names.push("julie");
console.log(names.length);

for (let e of names) {
  console.log(e);
}

//findIndex:

const julieIndex = names.findIndex((e) => e === "julie");

console.log(julieIndex);

//splice:

console.log(names.splice(2, 1));

//all the find and splice methods in javascript are performance intencive because they go through all the elements. so we'll avoid these methods unnecessarily.
