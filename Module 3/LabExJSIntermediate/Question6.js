function unique(duplicatesArray) {

const duplicatesSet = new Set(duplicatesArray)

return duplicatesSet

}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const carGarage = ['Mustang', 'Mustang', 'Enzo', "Lamborghini", "Charger", "Charger", "Land Rover", "Charger"]

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(carGarage))