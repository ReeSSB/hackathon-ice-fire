
/////////////////////////// To Fetch Books ///////////////////////////////////////////
const bookApi = async function (book) {
    const bookData = await fetch(`https://www.anapioficeandfire.com/api/books`, {
        method: "GET"
    });
    const bookDataJson = await bookData.json();
    console.log(bookDataJson);



    //////////////////////////// To Fetch Charatcers //////////////////////////////////////

    // const characterApi = async function (character) {
    const characterData = await fetch(`https://www.anapioficeandfire.com/api/characters/2`, {
        method: "GET"
    });
    const characterDataJson = await characterData.json();
    console.log(characterDataJson);


    // const charaterList = document.createElement("div");
    // characterDataJson.forEach((character) => {
    //     console.log(character);
    //     const characterContainer = document.createElement("div");
    //     characterContainer.className = "character-container";
    //     characterContainer.innerHTML =
    //         `< li class="character" > characters : ${ characterDataJson.name } </ >
    // `
    //     characterList.append(characterContainer);




    const bookList = document.createElement("div");
    bookDataJson.forEach((book) => {
        console.log(book);
        document.title = "Fire & Ice";
        document.body.innerHTML = `<h1 class="Fireandice-header">Fire and Ice World.<br> We have Amazing books having Greatest characters, who can take you to trip of another World. </h1>`;
        const bookContainer = document.createElement("div");
        bookContainer.className = "book-container";
        bookContainer.innerHTML =
            `<h3 class="book-name">Book Title: ${book.name}</h3>
            <ul class="book-ul">
        <li class="book-isbn li-class">ISBN: ${book.isbn}</li>
        <li class="book-author li-class">Author: ${book.authors}</li>
        <li class="book-noofpages li-class">No of Pages: ${book.numberOfPages}</li>
        <li class="book-pubslisher li-class">Publisher: ${book.publisher}</li>
        <li class="book-released li-class">Released Date: ${book.released}</li></ul>
        <li class="book-characters li-class">Characters: ${characterDataJson.name}</li >
    `;
        bookList.append(bookContainer);
    });

    document.body.append(bookList);
    // document.body.append(characterList);

};

bookApi();
// characterApi();
console.log('Book API');

// bookApi();
// characterApi();
