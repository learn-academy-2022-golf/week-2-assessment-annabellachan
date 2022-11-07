// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// Jest template
// describe("functionName", () => {
//     it("describe what functionName does here", () => {
//     expect(functionName(pass arg as needed)).toEqual(expected output)
//     })
// })
    

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("mult3", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        const numbers1Output = [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        const numbers2Output = [72, 81, 90, 99, 108]
        expect(mult3(numbersArray1)).toEqual(numbers1Output)
        expect(mult3(numbersArray2)).toEqual(numbers2Output)
    })
})
    // ReferenceError: mult3 is not defined

// b) Create the function that makes the test pass.
    // Create the function called mult3 that takes in an array
    // one parameter - array
    // Iterate over array using .map() so that we can midify each value in the array
        // multipply each value by three
    // return mapped array
const mult3 = (array) => {
    return array.map(value => value * 3)
}
    //Test Suites: 1 passed, 1 total
    //Tests:       1 passed, 1 total


 // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

describe("divBy3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        const object1Output = "15 is divisible by three"
        const object2 = { number: 0 }
        const object2Output = "0 is divisible by three"
        const object3 = { number: -7 }
        const object3Output = "-7 is not divisible by three"
        expect(divBy3(object1)).toEqual(object1Output)
        expect(divBy3(object2)).toEqual(object2Output)
        expect(divBy3(object3)).toEqual(object3Output)
    })
})
    // ReferenceError: divBy3 is not defined

// b) Create the function that makes the test pass.
    // Create a function called divBy3
    // one parameter = object
    // Use dot notation to be able to pass through each object values in the for loop (object.number) because we were given objects and not an arrays
        // I had a really hard time writing this because I used object instead of object.number and could not understand by I kept getting back undefined...but finally got it!!!
    // Return the looped objects

const divBy3 = (object) => {
    for (let i = 0; i < object.number; i++) {
        if (object.number % 3 === 0){
            return object.number + " is divisible by three"
        } else if (object.number % 3 != 0) {
            return object.number + " is not divisible by three"
        // 
        } else {
            return "Error"
        }  
     }
}
// ● divBy3 › takes a object as an argument and decides if the number inside it is evenly divisible by three or not
// 74 |         const object3Output = "-7 is not divisible by three"
// 75 |         expect(divBy3(object1)).toEqual(object1Output)
// > 76 |         expect(divBy3(object2)).toEqual(object2Output)
//    |                                 ^
// 77 |         expect(divBy3(object3)).toEqual(object3Output)
// 78 |     })
// 79 | })
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
    // My first conditional passed through but I'm not sure why object2 and object3 are not passing if object.number % 3 !== 0 (the number is not divisible by 3). Could it be becuase 0 and -7 are not considered as values?

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalized", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns1Output = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        const randomNouns2Output = ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(capitalized(randomNouns1)).toEqual(randomNouns1Output)
        expect(capitalized(randomNouns2)).toEqual(randomNouns2Output)
    })
})
//  ReferenceError: capitalized is not defined

// b) Create the function that makes the test pass.
    // Create a function called capitalized that takes in an array of words and returns an array with all the words capitalized
    // One paramter - array
    // Iterate the array by using .map() so that we can modify each value in the array 
        // use .toUpperCase() to uppercase all the strings in the array (.toUpperCase() can only be used in a string)
        // use .slice() to separate the value index 0 and value index 1 so start at index 1 and below, the letters will be lowercased
            // use .toLowerCase() to lower case the letters
        // return mapped array 

const capitalized = (array) => {
    return array.map(value => value[0].toUpperCase() + value.slice(1).toLowerCase()) 
}
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelTester1Output = 1
        const vowelTester2 = "academy"
        const vowelTester2Output = 0
        const vowelTester3 = "challenges"
        const vowelTester3Output = 1
        expect(vowelTester1).toEqual(vowelTester1Output)
        expect(vowelTester2).toEqual(vowelTester2Output)
        expect(vowelTester3).toEqual(vowelTester3Output)
    })
})

// b) Create the function that makes the test pass.
    // create a function called vowel 
    // one parameter = string
    // using a for loop, 
        // if there is a vowel in the string 
            // push string by using the method indexof to find the position of the first vowels
        //  return the index where the first vowel is located at

const vowel = (string) => {
let newString = []
    for (let i = 0; i < string.length; i++){
        if(string[i] == "a" || "e" || "i" || "o" || "u")
            newString.push(string[i])
        }
            return newString.indexOf()
}
// ● firstVowel › takes in a string and logs the index of the first vowel

// expect(received).toEqual(expected) // deep equality

// Expected: 1
// Received: "learn"

//   167 |         const vowelTester3 = "challenges"
//   168 |         const vowelTester3Output = 1
// > 169 |         expect(vowelTester1).toEqual(vowelTester1Output)
//       |                              ^
//   170 |         expect(vowelTester2).toEqual(vowelTester2Output)
//   171 |         expect(vowelTester3).toEqual(vowelTester3Output)
//   172 |     })

//   at Object.toEqual (code-challenges.test.js:169:30)
// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 passed, 4 total

    //  when I console.log this function, I get a return of -1... I am not sure why 
