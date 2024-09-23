function camelCase(cssProp) {
        {
            let capitals = cssProp.split("-")

            for (let i = 0; i < capitals.length; i++) {

                capitals[i] /*end product after all calulations*/ = 
                capitals[i][0]/*calls the first letter of the index*/.toUpperCase() /*manipulates*/ 
                + capitals[i].substr(1)//*prints the rest of the index*/;  
            }

           return capitals.join().replace(",","")//replaces all ',' that come with 'join'
        }

    }

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display