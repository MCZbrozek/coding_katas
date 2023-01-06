function fizzBuzz(n) {
// a place to store the results(array)
const result = []
// Iterate from 1 up to and including n
for (let i=1; i <=n; i+=1 ) {
// Inside of that loop if the value is a multiple of 3
//  push the value "fizz" into the result
if (i % 3 === 0 && i % 5 === 0) {
    result.push('FizzBuzz')
}
else if (i % 3 === 0) {
    result.push('Fizz')
} else if (i % 5 ===0) {
    result.push('Buzz')
     // Inside of that loop if the value is a multiple of 5
    //  push the value "buzz" into the result
} else {
    result.push(i)
    // else, push n
}
}
// return the results
return result
}

console.log(fizzBuzz(17))
