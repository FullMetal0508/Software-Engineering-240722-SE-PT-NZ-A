const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];


// Write a function getBookTitle(bookId) that uses the find function to return the
//title of the book object with the matching id.   

function getBookTitle(bookID){

    const finder = books.find(() => books.id == books.title)

    return finder

}

console.log(getBookTitle(1))
