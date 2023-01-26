// Make a program that filters a list of strings and returns a list with only your friends name in it. 
// If a name has exactly 4 letters in it, you can be sure that is has to be a friend of yours. Otherwise they are not. 

// Ex: Input=["Ryan", "Sara", "Mike", "Carmela", "Steven"]

function friend(friends) {
    // Make a new array to push values to
    const realFriends = []
    // Loop over the values in the array
    for (let i=0; i < friends.length; i++) {
        const friend = friends[i]
        // Conditional to evaluate letters in name
        
        if (friend.length === 4 ) {
            realFriends.push(friend)
        }
    }
    // push values to the new array
    
    // return the result
    return realFriends
}

console.log(friend(["Ryan", "Sara", "Mike", "Carmela", "Steven"]), ['Jean', '123'])

function friend1(friends) {
   return friends.filter(friend => {
        return friend.length === 4
    });
}

console.log(friend1(["Ryan", "Sara", "Mike", "Carmela", "Steven"]), ['Jean', '123'])