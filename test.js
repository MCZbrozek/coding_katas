// Write code for a method to store athletes ratings for shoes 
// takes the shoeId: 
// takes the athleteId: 
// takes the rating: 

// First we need to get the data into the database so we would run an as
// function that takes the shoeId and the rating and places them into the database entity called shoes
// then we return the response or error if the we were unable to connect
async function addShoeRatingToDatabase(shoeId, rating) {
    // variable to hold the await connect to mySQL
    const query = INSERT INTO shoes(shoeId, rating) VALUES rating
    await connect.execute(query, category)
    return 'success response'
} catch (error) {
    throw new Error
}


// Next we need to write a controller that will take in the request.body and run the `addShoeRatingToDatabase` command 

async function postShoeRatingToDatabase (request, response) {
    try {
        const shoeRating = request.body

        const shoe = {
            shoeId: 
            shoeRating
        }

        const result = await addShoeRatingToDatabase(rating)
        const status = status {
            status: 200,
            message: "Great Job"
        }
    }
}


// Write some code for a function that recommends the highest average rated shoe. 

// take in the atheleteId
// return interger representing the ID of the recommended shoe 

// So we need to take in data from an array of shoes related to the athleteId

function getHighestRated(athleteId) {
    const avgRated = ''
    const allShoeRatings = Array(shoes)
    Array.filter(filter shoe.id)
    shoe.rating
 for (let i = 0; i < str.length; i++ {
     //shoe.id, shoe.rating
     const shoe = array[i]
     avgShoe = Math.sum(shoe.rating)
     avgShoe / array.length 

     array.sort(shoe1, shoe2 => {
         if shoe1 > shoe2 {
             return 1
         } else return -1
     }) return array[0]
 })
} // out an average, but that really wasnt what the question asked 

function getHighestRated(athleteId) {
    const totalShoes = 0
    const countShoes = 0

    

}
