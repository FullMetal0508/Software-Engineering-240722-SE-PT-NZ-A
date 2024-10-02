
const data = [{ name: 'bob', age: 23 },
    { name: 'alice', age: 39 }]

    const artist = {
            name: "Van Gogh",
            portfolio: [
                {title: "portrait", url:"https://collectionapi.metmuseum.org/api/collection/ v1 / iiif / 436532 / 1671316 / main - image"},
                {title: "sky", url:"https://mymodernmet.com/wp/wp-content/uploads/ 2020 / 11 / White - house - night - van - goh - worldwide - 2.jpg" },
            ]
        }

    function addCard(title, text) {
        // clone the template
        const template =
            document.getElementById("card-template")
                .content.cloneNode(true);
        // populate the template
        template.querySelector('.card-title').innerText =
            title;
        template.querySelector('.card-text').innerText =
            text;
        // include the populated template into the page
        document.querySelector('#card-list')
            .appendChild(template);
    }

data.forEach((person) => addCard(person.name,person.age) )
