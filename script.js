const library = [];

function showUploadForm() {
  document.getElementById("uploadSection").classList.remove("hidden");
  document.getElementById("librarySection").classList.add("hidden");
}

function showLibrary() {
  document.getElementById("uploadSection").classList.add("hidden");
  document.getElementById("librarySection").classList.remove("hidden");
  displayBooks();
}

function uploadBook() {
  const title = document.getElementById("bookTitle").value;
  const fileInput = document.getElementById("bookFile");
  const file = fileInput.files[0];

  if (title && file) {
    const bookURL = URL.createObjectURL(file);
    library.push({ title, file, url: bookURL });
    alert("Book uploaded!");
    document.getElementById("bookTitle").value = "";
    fileInput.value = "";
    showLibrary();
  } else {
    alert("Please enter a title and select a file.");
  }
}

function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  library.forEach(book => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${book.title}</strong> - <a href="${book.url}" target="_blank">Read</a>`;
    bookList.appendChild(li);
  });
      }
