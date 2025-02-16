const main = document.querySelector("main");
const addBookBtn = document.querySelector(".add-book-btn");

const library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const hobbit = new Book("The Hobbit", "JRR TOLKIEN", 234, true);
const hp = new Book("HP", "BLA", 434, false);

library.push(hobbit);
library.push(hp);

library.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.innerHTML = `
    <h1>${book.title}</h1>
    <h2>${book.author}</h2>
    <p>${book.pages} pages</p>
    <button class="read-btn">${book.isRead ? "Read" : "Not Read"}</button>
    `
    main.appendChild(div);
})