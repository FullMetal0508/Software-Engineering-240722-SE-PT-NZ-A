const animals = ['Tiger', 'Giraffe']

animals.push("Lion")
animals.push("Kiwi")

animals.unshift("Shark")
animals.unshift("Mouse")
animals.unshift("koala")

let animalsSorted = [...animals].sort()

let replaceMiddle = animalsSorted.splice(1,3,"kangaroo","Cat")

//Stuck on Question 4e
let findMatchingAnimals(beginsWith) = {
 
    for (i = 0; i < animals.length; i++) {
        animals[i] = animals[i][0].startsWith());
        
    }

    return findMatchingAnimals();
}


console.log(animals)
console.log(animalsSorted)
console.log(replaceMiddle)