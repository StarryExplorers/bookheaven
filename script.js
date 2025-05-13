// script.js

document.addEventListener("DOMContentLoaded", () => { const navLinks = document.querySelectorAll("nav a"); const sections = document.querySelectorAll("main section");

navLinks.forEach(link => { link.addEventListener("click", e => { e.preventDefault(); const target = e.target.getAttribute("href").substring(1);

sections.forEach(sec => sec.classList.remove("active")); document.getElementById(target).classList.add("active"); }); 

});

// Load books from localStorage const savedBooks = JSON.parse(localStorage.getItem("books")) || []; savedBooks.forEach(book => addBookToLibrary(book));

// Upload Form const uploadForm = document.getElementById("uploadForm"); uploadForm.addEventListener("submit", e => { e.preventDefault(); const title = document.getElementById("title").value; const author = document.getElementById("author").value; const file = document.getElementById("file").files[0];

if (!title || !author || !file) { alert("Please fill out all fields!"); return; } const reader = new FileReader(); reader.onload = () => { const book = { title, author, fileName: file.name, fileUrl: reader.result }; addBookToLibrary(book); savedBooks.push(book); localStorage.setItem("books", JSON.stringify(savedBooks)); uploadForm.reset(); alert("Book uploaded!"); }; reader.readAsDataURL(file); 

});

// Search const searchInput = document.getElementById("searchInput"); searchInput.addEventListener("input", () => { const query = searchInput.value.toLowerCase(); const books = document.querySelectorAll("#searchResults .book"); books.forEach(book => { const text = book.textContent.toLowerCase(); book.style.display = text.includes(query) ? "block" : "none"; }); }); });

function addBookToLibrary(book) { const library = document.getElementById("library"); const searchResults = document.getElementById("searchResults");

const bookCard = document.createElement("div"); bookCard.className = "book"; bookCard.innerHTML = <h3>${book.title}</h3> <p>by ${book.author}</p> <a href="${book.fileUrl}" download="${book.fileName}" target="_blank">Download PDF</a>;

// Clone for search results const searchCard = bookCard.cloneNode(true);

library.appendChild(bookCard); searchResults.appendChild(searchCard); }

