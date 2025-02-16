const main = document.querySelector("main");
const addBookBtn = document.querySelector(".add-book-btn");

const library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// const hobbit = new Book("The Hobbit", "JRR TOLKIEN", 234, true);
// const hp = new Book("HP", "BLA", 434, false);
// const hc = new Book("HP", "BLA", 434, false);
// const hb = new Book("HP", "BLA", 434, false);

// library.push(hobbit);
// library.push(hp);
// library.push(hc);
// library.push(hb);

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

const readBtn = document.querySelectorAll(".read-btn");

ReadBtnStyler= () => {
    readBtn.forEach(btn => {
        if (btn.innerText == "Read") {
            btn.style.backgroundColor = "#018749";
        } else {
            btn.style.backgroundColor = "#D2122E"
        }
    });
}

ReadBtnClicker = () => {
    readBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.innerText = btn.innerText == "Read" ? "Not Read" : "Read"
            ReadBtnStyler();
        });
    });
};

ReadBtnClicker();

ReadBtnStyler();