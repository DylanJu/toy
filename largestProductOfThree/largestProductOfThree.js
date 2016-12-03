/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  array.sort();
  const length = array.length;
  const result = Math.max(array[length-1] * array[length-2] * array[length-3],
                          array[length-1] * array[0] * array[1]);
  return result;
};

console.log(largestProductOfThree([-2,-1,3,7]));
