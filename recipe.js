// Ingredients
let spaghetti = 400
let guanciale = 250
let yolks = 6
let pecorino = 50
let pepper = 4
let salt = 0.1

let water = 2000

// dishes
let pan
let pot
let bowl
let bowl2
let plate
let strainer

// Misc
let carbonara
let yolkWeight = 18
let cutGuanciale
let partPepper
let partWater


// To make classic carbonara, first cut the guanciale into 1cm layers, then into long strips.
cutGuanciale = guanciale

// Combine the egg yolks with the finely grated Pecorino Romano.
bowl = yolks * yolkWeight + pecorino

// Roast the black pepper on a pan until it smokes and sizzles, and combine a small amount of it to the yolks and cheese mixture, set aside the rest.
pan = pepper
partPepper = 0.2 * pepper
pan -= partPepper
bowl += partPepper
bowl2 = pan
pan = null

// Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.
pan += cutGuanciale
plate = pan
pan = null

// Cook the pasta with a pinch of salt in the water (guanciale is already very salty);
pot = spaghetti + water + salt
spaghetti = 2.25 * spaghetti 
strainer = spaghetti
pot -= spaghetti

// set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente.
partWater = 0.1 * pot
pot = null

// Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:
// this will create a creamy sauce with the pasta starch contained in that water.
pan = plate + partWater
plate = null 

// TURN OFF THE HEAT AND SET ASIDE for 1 minute, then transfer the pasta to the same pan and mix together.
pan += strainer 
strainer = null

// Add the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.
// It is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.
pan += bowl
bowl = null
// Add the remaining roasted black pepper and serve immediately.
pan += bowl2
carbonara = pan
pan = null
bowl2 = null
 
// Let's see if we have nothing left
console.log("Anything left on our used dishes? ")
console.log(pan)
console.log(pot)
console.log(bowl)
console.log(bowl2)
console.log(plate)
console.log(strainer)
console.log("No? Good.")
// And finally we are left with
// Assuming egg yolks weigh around 18g and pasta gains 1.25 its weight when cooking we should have 
// 900g (2.25 * 400) + 250 + 108 (6 * 18) + 50 + 4 + 200 (10% of water water for sauce) + 0.01 (10% of salt added to water) = 1462.01 grams of carbonara
console.log("And now we are left with", carbonara, "grams of delicious carbonara.")
