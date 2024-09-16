/*async function func1 () {
    let start = 
    console.log("Started preparing pizza...") //call after 1 second
}

async function func2 () {
    console.log("Made the base") // call after 2 seconds
}

let func3 = async function () {
    console.log("Added the sauce and cheese") // call after 3 seconds
}


let func4 = async function() {
console.log("Added the pizza topping") // call after 4 seconds
}

let func5 = async () => {
console.log("Cooked the pizza") // call after 5 seconds
}

let func6 = async () => {
console.log("Pizza is ready") // call after 6 seconds
}

/*setTimeout (func1, 1000)
setTimeout (func2, 2000)
setTimeout (func3, 3000)
setTimeout (func4, 4000)
setTimeout (func5, 5000)
setTimeout (func6, 6000)*/

let start = "Started preparing pizza..."
let promise1 = new Promise (resolve => setTimeout(() => resolve(start), 1000)
) .then (result => {
    console.log(result);
    start = "Made the base"
    return new Promise (resolve => setTimeout(() => resolve(start), 1000))
}) .then (result => {
    console.log(result);
    start = "Added the sauce and cheese"
    return new Promise (resolve => setTimeout(() => resolve(start), 1000)
)
}) .then (result => {
    console.log(result);
    start = "Added the pizza topping"
    return new Promise (resolve => setTimeout(() => resolve(start), 1000)
)
}) .then (result => {
    console.log(result);
    start = "Cooked the pizza"
    return new Promise (resolve => setTimeout(() => resolve(start), 1000)
)
}) .then (result => {
    console.log(result);
    start = "Pizza is ready"
    return new Promise (resolve => setTimeout(() => resolve(start), 1000)
)
}) .then (result => {
    console.log(result)
})
