// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA 
// (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

const dna = "TTTAAAGGGCCC"

// SOLUTION #1 - Basic solution using lots of conditionals

function DNAStrand(dna){
    // Create an empty array to hold the DNA strand
    let complementary = ''
    // Loop through the array
    for (let i = 0; i < dna.length; i++) { 
        let currentLetter = dna[i]
        if (currentLetter === 'A') {
            complementary += 'T'
        } else if (currentLetter === 'T') {
            complementary += 'A'
        } else if (currentLetter === 'G') {
            complementary += 'C'
        } else if (currentLetter === 'C') {
            complementary += 'G'
        }
    // Use conditionals to push letters into the empty array
    }
    console.log(complementary)
  }

  DNAStrand(dna)

// SOLUTION #2 -  Alternate solution using an object of keys and values

function DNAStrand(dna){
    // Create an empty array to hold the DNA strand
    let complementary = ''
    let key = {
        A: 'T',
        T: "A",
        C: "G",
        G: "C",
    }
    // Loop through the array
    for (let i = 0; i < dna.length; i++) { 
        let currentLetter = dna[i]
        complementary += key[currentLetter]
        
    // Use conditionals to push letters into the empty array
    }
    console.log(complementary)
  }

  DNAStrand(dna)

// SOLUTION #3 - Alternate solution using an .map


function DNAStrand(dna){
    // Create an empty array to hold the DNA strand
    let key = {
        A: 'T',
        T: "A",
        C: "G",
        G: "C",
    }
    // take the string dna .split into an Array, .map over the array using the funtion that takes in "currentLetter" replaces the value acording to the 
    // key{} and then use .join to return the result to a string.
    return dna.split('').map(currentLetter => key[currentLetter]).join('')
    // console.log(dna)
  }

  DNAStrand(dna) // Returns TTTAAAGGGCCC

