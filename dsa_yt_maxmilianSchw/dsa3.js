/*
2. Sets

these are also about lists of data but different than arrays.

-> duplication is not allowed.
-> insertion order is not stored.
-> element access and extraction via method.
-> iterable(order is not guaranteed).
-> size adjusts dynamically.
-> deletion and finding elements is trivial and faster than arrays.

*/

const ids = new Set();

ids.add("kjklsi");
ids.add(123);
ids.add("asjdasithaih");
ids.add(123);
ids.add(54545767);

console.log(ids);
console.log(ids.has(123));
ids.delete(54545767);
console.log(ids.has(54545767));
