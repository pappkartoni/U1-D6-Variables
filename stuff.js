let firstName ="Florian"
let lastName = "Dreyer"
let fullName = firstName + " " + lastName

console.log("Hello, my name is", fullName, "\n")

let age = 30
// Formally we would set a new Date() here and get the full year from that but that returns an integer iirc so i skipped this part
let currentYear = 2022
let birthYear = currentYear - age

// Technically vague since I could not have had my birthday this year
console.log("Since I am", age, "years old and the current year is ", currentYear, ", that means I must have been born in ", birthYear, ".\n")