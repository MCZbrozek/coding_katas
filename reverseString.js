function reverseString(input) {
// We need an empty string to put the result
let output = ''
// We need a loop to iterate over the letters 
for (i=input.length - 1; i>=0; i-=1) {
    output += input[i]
    // append the current letter to the reversed string
}
return output
}

console.log(reverseString('Hello'))

function reverseString1(input) {
    // We need an empty string to put the result
    let output = ''
    // We need a loop to iterate over the letters 
    for (i=0; i< input.length; i += 1) {
        output = input[i] + output
        // append the current letter to the reversed string
    }
    return output
    }

    console.log(reverseString1('World'))

    function reverseString2(input) {
        return input.split('').reverse().join('')
        // split the string into an array at each character (''), reverse the array, then join back together at each character ('')
    }

    console.log(reverseString2('World'))