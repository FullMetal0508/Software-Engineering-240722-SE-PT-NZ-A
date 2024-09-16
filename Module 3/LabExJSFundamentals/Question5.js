 let Greeting = function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

console.log(Greeting)

let getGreeting = (name) => {
    console.log('Hello ' + name + '!');
    }

getGreeting("Josh")