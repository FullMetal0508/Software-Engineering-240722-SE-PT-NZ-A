const today = new Date();
let todaySeconds = new Date(1000*60*60*24)


console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
console.log(today.getSeconds() + " seconds have passed so far today");
console.log(todaySeconds + " seconds have passed so far today")


