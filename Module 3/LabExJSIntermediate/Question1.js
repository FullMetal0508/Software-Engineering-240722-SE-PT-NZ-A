function ucFirstLetters(str) 
{
let words = str.split(" ")

for (let i = 0; i < words.length; i++)
{
    [i] = words[i][0].toUpperCase() + words[i].substring(1)
};

return words.join(" ");
}

//Stuck


console.log(ucFirstLetters("los angeles"))