function ucFirstLetters(str) 
{
let words = str.split(" ")

for (let i = 0; i < words.length; i++)
{
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
};

return words.join(" ");
}

console.log(ucFirstLetters("los angeles"))
console.log(ucFirstLetters('new zealand'))
console.log(ucFirstLetters('new york'))
console.log(ucFirstLetters('south africa'))