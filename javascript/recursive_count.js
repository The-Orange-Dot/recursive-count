function recursiveCount(num = 0) {
  if (num > 10) return "done";

  recursiveCount(num + 1);
  console.log(num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

//First we should always put on the brakes before doing any loops or recursions, so
//setting the if statement to finish the loop is put on line 2 first. If the num is greater than 10
//the recursion will return "done," and any code under it will become unreachable.

// We can now call itself inside the function, and put num + 1 in the argument to build up the stacks
//to be called (and counting up). After each stack, we're returning nums, until it reaches 10. Then
//the brakes are hit, and everything is returned (well, printed in thie case).
