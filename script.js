const main = document.querySelector("main");
const booksContainer = document.querySelector(".books-container");
const addBookBtn = document.querySelector(".add-book-btn");
const form = document.querySelector(".book-form");
const submitBtn = document.querySelector("#submit-btn");
const content = document.querySelector(".content");

const library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

const ShowForm = () => {
    if (form.style.display == "" || form.style.display == "none") {
        form.style.display = "flex"; 
    } else {
        form.style.display = "none"; 
    }
};

const ResetForm = () => {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelectorAll('input[name="read"]').forEach(radio => (radio.checked = false));
    form.style.display = "none";
};

const AddBookToLibrary = () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value
    const radio = document.querySelector('input[name="read"]:checked').value == "true" ? true : false;

    const book = new Book(title, author, pages, radio);
    library.push(book);
    console.log(book)

    ResetForm();
    UpdatePage();
}

const UpdatePage = () => {
    booksContainer.innerHTML = "";
    
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        const div = document.createElement("div");
        div.classList.add("book-card");
        div.innerHTML = `
        <div class="top-card-div">
            <h1>${book.title}</h1>
            <button class="x-btn" onclick="RemoveBook(${i})">X</button>
        </div>
        <h2>${book.author}</h2>
        <p>${book.pages} pages</p>
        <button class="read-btn">${book.isRead ? "Read" : "Not Read"}</button>
        `
        booksContainer.appendChild(div);
    }
    ReadBtnClicker();
    ReadBtnStyler();

}

ReadBtnStyler= () => {
    document.querySelectorAll(".read-btn").forEach(btn => {
        if (btn.innerText == "Read") {
            btn.style.backgroundColor = "#018749";
        } else {
            btn.style.backgroundColor = "#D2122E"
        }
    });
}

ReadBtnClicker = () => {
    document.querySelectorAll(".read-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.innerText = btn.innerText == "Read" ? "Not Read" : "Read"
            ReadBtnStyler();
        });
    });
};

const RemoveBook = (index) => {
    library.splice(index, 1)
    UpdatePage();
}

submitBtn.addEventListener("click", AddBookToLibrary);

addBookBtn.addEventListener("click", ShowForm);