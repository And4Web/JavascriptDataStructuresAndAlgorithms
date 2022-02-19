//function to count up and down:

function countUpDown(n) {
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
countUpDown(2);
