let a = 11,
  b = 3;

let result = `${a} + ${b} is `;

if (a + b < 10) {
  result += "less than 10"; 
} else {
  result += "greater than 10";
}

console.log(result)

// '+=' checks whether 'a + b' would be less than or equal to 10
// if it is less than, it would print the first string
// if is more than, it prints the second string

