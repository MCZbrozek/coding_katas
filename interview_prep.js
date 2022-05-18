// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure they’re not...
// Ex:
// const input = ["Ryan", "Karen", "Jason", "Kate", "Josh"]
// // Output = [“Ryan”, “Kate”, “Josh”]

// function friends(input) {
//     const realFriends = []
// // loop through the array and count letters
//     for (let i = 0; i < input.length; i++) {
// // if letters == 4 then return friends list
//         const name = input[i];
//         if (name.length == 4) {
//             realFriends.push(name)
//         }
//     } 
//     return realFriends
// }

// console.log(friends(input))


// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls’ comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string “This website is for losers LOL!” would become “Ths wbst s fr lsrs LL!“.
// Note: for this kata y isn’t considered a vowel.

// const troll = 'This website is for losers LOL!'

// function removeVowels(troll) {
//     let noVowels = ''
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let i = 0; i < troll.length; i++){
//             for (let j = 0; j < vowels.length; j++){
//             const letter = troll[i]
//             const vowel = vowels[j]
//             if (letter === vowel) {
//                 noVowels += letter
//             }
//         }
                      
//     } return noVowels
            

// }

// console.log(removeVowels(troll))



// Check to see if a string has the same amount of ’x’s and ’o’s. The function must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const str = 'XxmooxxOOjk'

function xo(str) {
    str = str.toLowerCase()
    
     let x = 0
     let o = 0
    for( let i = 0; i < str.length; i++ ) {
        const letter = str[i]
        if (letter === 'x') {
             x += 1
        } else if (letter === 'o') {
             o += 1
        } 
    } if ( x === o) {
        return true
    } else {
        return false
    }

}

console.log(xo(str))

