/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer

132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
*/

function digitalRoot(n) {
    // check if the number is > 9
    while (n > 9) {
        // sum digits
            // place to store the Sum
            let sum = 0
            // while n is greater than 0
            while (n > 0) {
                // mod the # by 10 to get the last digit
                const lastDigit = n % 10
                // take math.floor of # divided by ten  to drop off last digit
                n = Math.floor(n / 10)
                // add last digit to sum and repeat
                sum += lastDigit
            }
        // re-assign the sum to n
        n = sum
    }
    return n 
  }

  console.log(digitalRoot(132189))

  /* Output n=132189
  $ node sum_of_digits-digital_root.js
  6 */

  function digitalRoot2(n) {
    // check if the number is > 9
    while (n > 9) {
       n = n.toString().split('').reduce((sum, digit) => sum + +digit, 0)
    }
    return n 
  }

  console.log(digitalRoot2(132189))

  