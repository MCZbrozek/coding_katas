/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
const A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

function findOdd(A) {
// A place to store the counts
const counts = {}
// Loop over an array of numbers 
for (let i = 0; i < A.length; i++) {
const number = A[i]
    // if the number is not already in the counts object 
if (!counts[number]) {
        //add it to `counts` with a value of 1
    counts[number] = 1
    // if we have seen this number before we will 
} else {
    //increment its count
    counts[number]++
}
}
 console.log(counts)
// itterate over the counts 
for (const number in counts){
    const count = counts[number]
    //if the count is odd
    if (count % 2 !== 0) {
         // return that # 
        return Number(number)
    }
}  
    return 0;
  }

  console.log(findOdd(A))

  /*$ node find_the_odd_int.js
{ '1': 2, '2': 2, '3': 2, '4': 2, '5': 3, '20': 2, '-1':
 2, '-2': 2 }
5*/

// ---- Solution with Reduce
function findOdd(A) {
    // A place to store the counts
    const counts = A.reduce((counts, number) => {
        // if the number is not already in the counts object
        if (!counts[number]) {
            //add it to `counts` with a value of 1
        counts[number] = 1
        // if we have seen this number before we will 
    } else {//increment its count
        counts[number]++
    }
    return counts
    }, {})
    // itterate over the counts 
    for (const number in counts){
        const count = counts[number]
        //if the count is odd
        if (count % 2 !== 0) {
             // return that # 
            return Number(number)
        }
    }  
        return 0;
      }
    
      console.log(findOdd(A))
