let firstName ="Florian"
let lastName = "Dreyer"
let fullName = firstName + " " + lastName

console.log("Hello, my name is", fullName, "\n")

let age = 30
// Formally we would set a new Date() here and get the full year from that but that returns an integer iirc so i skipped this part
let currentYear = 2022
let birthYear = currentYear - age

// Technically vague since I could not have had my birthday this year
// let today = new Date()
// let birthday = new Date(1992,12,12)
// let timedif = today - birthday
// let actualAge = new Date(timedif).getFullYear() - 1970
// // and then we could do
// let actualBirthYear = today.getFullYear() - actualAge
// // but this uses the actual birthday to get the age which makes this whole thing irrelevant since we would have the birthyear then by default

console.log("Since I am", age, "years old and the current year is ", currentYear, ", that means I must have been born in ", birthYear, ".\n")