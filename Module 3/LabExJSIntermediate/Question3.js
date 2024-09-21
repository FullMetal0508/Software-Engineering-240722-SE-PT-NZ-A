const animals = ['Tiger', 'Giraffe']

animals.push("Lion")
animals.push("Kiwi")

animals.unshift("Shark")
animals.unshift("Mouse")

let animalsSorted = [...animals].sort()

let replaceMiddle = animalsSorted.splice(1,3,"Dog","Cat")



console.log(animals)
console.log(animalsSorted)
console.log(replaceMiddle)