const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();

  const modifiedNumbers = numStr.split('').map((_, index) => {
    const removedDigit = numStr.slice(0, index) + numStr.slice(index + 1);
    return parseInt(removedDigit, 10);
  });

  const maxNum = Math.max(...modifiedNumbers);
  return maxNum;
}

module.exports = {
  deleteDigit
};
