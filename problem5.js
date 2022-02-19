// function to log upto 10 atmost:

function logAtMost10(n) {
  for (let i = 1; i <= Math.min(10, n); i++) {
    console.log(i);
  }
}
logAtMost10(9);
