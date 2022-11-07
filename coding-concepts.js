// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer:
// b) Verify and explain: [
  // 'G', 'o', 'l',
  // 'f', ' ', '2',
  // '0', '2', '2'
//] - The .split("") method changes a string to an array. In this case, we are passing the function cohort and telling the computer where to break the string "Golf 2022" into multiple strings. This method returns the original without changing it.  

// --------------------2) What will this log?

const greeter = (name) => {
 `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined 
// b) Verify and explain: undefined - Every function needs a return. In this example, it is missing a return on line 23. If a function comes back as undefined, we should always check the return statement. It will need to be written as -> return `Hello, ${name}!` for this function to work. "Learn Student" will pass through the parameter "name" and will be logged as "Hello, LEARN Student." once we invoke it.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: 8, 10, 12, 14, 16
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] - The .map() method always returns a new array of the same length as the original array. It's able to iterate and modify every element in the array that it is called on. In this example, the array multipliedByTwo will have all the elements inside the array multipled by 2 until the conditions are met and create a new array called numbers > [ 8, 10, 12, 14, 16 ].

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: [ 11, 13, 15 ] - The .filter() method will always return a shorter array than the original array. In this example, we are asking the computer to pass each element of the onlyOdds array to see if they are not divisible by 2. Once it checks each element, it returns a new shorter array with numbers that are odd. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Javascript - Objects can be broken down further (also known as nested). Nest objects are helpful in storing some object's properties with another object. In this example, we are using the destructuring method to create a shortcut into the path of the nested object myCodingSkills to get myCodingSkills in languages at index 0 by using "." to insinuate what we want (console.log(myCodingSkills.languages[0])

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George, Foxtrot, 2022
// b) Verify and explain: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 } - The parameter "name" is being defined once it passes through each object by the keyword "this". In this example, we are creating a new instance for a student named George who attends learn, is in cohort Foxtrot and in the year 2022 by calling on the "new" keyword.
