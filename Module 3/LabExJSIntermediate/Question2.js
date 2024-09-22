function truncate(str, num) //calling the function name and parameters
{
    if (str.length <= num)
    {
    return str;
    } //prints the sentence up to the characters ID'd in 'num'

    return str.slice(0, num) + '...' //limits the number of characters printed with 'num' value, then prints '...'
  }

console.log(truncate('This text will be truncated if it is too long', 25))
console.log(truncate("everything works as intended with this function, will look to improve",45))