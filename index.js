function helloThere() {
    let firstName ="Florian"
    let lastName = "Dreyer"
    let fullName = firstName + " " + lastName

    console.log("Hello, my name is", fullName, "\n")

    let age = 30
    let currentYear = 2022
    let birthYear = currentYear - age

    console.log("Since I am", age, "years old and the current year is ", currentYear, ", that means I must have been born in ", birthYear, ".\n")
}

function carbonara() {
    let spaghetti = 400
    let guanciale = 250
    let yolks = 6
    let pecorino = 50
    let pepper = 4
    let salt = 0.1

    let water = 2000

    let pan
    let pot
    let bowl
    let bowl2
    let plate
    let strainer

    let carbonara
    let yolkWeight = 18
    let cutGuanciale
    let partPepper
    let partWater

    cutGuanciale = guanciale

    bowl = yolks * yolkWeight + pecorino

    pan = pepper
    partPepper = 0.2 * pepper
    pan -= partPepper
    bowl += partPepper
    bowl2 = pan
    pan = null

    pan += cutGuanciale
    plate = pan
    pan = null

    pot = spaghetti + water + salt
    spaghetti = 2.25 * spaghetti 
    strainer = spaghetti
    pot -= spaghetti

    partWater = 0.1 * pot
    pot = null

    pan = plate + partWater
    plate = null 

    pan += strainer 
    strainer = null

    pan += bowl
    bowl = null
    pan += bowl2
    carbonara = pan
    pan = null
    bowl2 = null
    
    console.log("Anything left on our used dishes? ")
    console.log("Rest in pan is", pan)
    console.log("Rest in Pot is", pot)
    console.log("Rest in Bowl is", bowl)
    console.log("Rest in other Bowl is", bowl2)
    console.log("Rest on Plate is", plate)
    console.log("Rest in Strainer is", strainer)
    console.log("No? Good.")
    console.log("And now we are left with", carbonara, "grams of delicious carbonara.")

}