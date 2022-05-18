// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// 1 letter "N,E,S,W" = 1 block
// 1 block = 1 minute


// SOLUTION #1 - Basic solution using lots of conditionals

const walk = ['N', 'S', 'E', 'W', 'N', 'S', 'E', 'W', 'N', 'S']

function isValidWalk(walk) {
    const validateWalk = {}
    // if walk.length == 10 then
    if ( walk.length === 10) {
    // loop through
    for (let i = 0; i < walk.length; i++) {
        const direction = walk[i]
    // if count[direction] then add it to the walk
    // else count[direction]  = 1
        if (validateWalk[direction]) {
            validateWalk[direction] += 1
        } else {
            validateWalk[direction] = 1
        }
    } 
    if (validateWalk.N - validateWalk.S == 0 && validateWalk.E - validateWalk.W) == 0) 
     // loop through again 
    // if N - S = 0 then return true
    // if E - W = 0 then return true
    // else return false
    } else {
        return false
  } console.log(validateWalk)
}

  isValidWalk(walk)