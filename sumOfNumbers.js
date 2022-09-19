/* 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

// Given 2 integers we want to add all of the numbers in that sequence 
// if a = b return 0
// add the current index to the sum

function getSum( a,b ) {
// find the lowest of a and b
// find the highest
let begin
let end
    if (a < b) {
 begin = a
 end = b
} else {
    begin = b
    end = a
}
// need a place to store the sum
let sum = 0
// iterate from begin to end
for(let i= begin; i <= end; i++) {
sum += i
}
return sum
}

console.log(getSum( 1,4 ))

//Alternate Solution ----------
function getSum( a,b ) {
    // find the lowest/highest of a and b
    let begin = Math.min(a,b)
    let end = Math.max(a,b)
    // need a place to store the sum
    let sum = 0
    // iterate from begin to end
    for(let i= begin; i <= end; i++) {
    sum += i
    }
    return sum
    }