function findMin(numbers) {
// A place to store the minunum initialized to the first value in the array
let minunum = numbers[0]
// iterate from the second value to the end of the array
for (let i = 1; i < numbers.length; i+=1) {
    if (numbers[i] < minunum) {
        minunum = numbers[i]
    }
}
// if the current value is less than the current minimum set it to current value
return minunum
// Return the minimum 
}

console.log(findMin([1,2,3]))
console.log(findMin([-10,42,15,-8,99,-71]))

function findMin1(numbers) {
    return Math.min(...numbers)
}

console.log(findMin1([1,2,3]))
console.log(findMin1([-10,42,15,-8,99,-71]))