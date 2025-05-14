// Global Variables
let currentUser = null;
let books = [];  // Array to store books
let favorites = [];  // User's favorite books

// Show User Info and Sign In/Out Button
function updateUserInfo() {
    const userDisplay = document.getElementById('user-display');
    const signInButton = document.getElementById('sign-in-btn');
    const signOutButton = document.getElementById('sign-out-btn');
    
    if (currentUser) {
        userDisplay.textContent = `Welcome, ${currentUser.name}`;
        signInButton.style.display = 'none';
        signOutButton.style.display = 'block';
    } else {
        userDisplay.textContent = 'Welcome to BookHeaven';
        signInButton.style.display = 'block';
        signOutButton.style.display = 'none';
    }
}

// User Sign In with Google or Email
function signIn(provider) {
    if (provider === 'google') {
        // Simulate Google login (you can integrate actual login later)
        currentUser = { name: 'User (Google)', email: 'user@google.com' };
    } else {
        // Simulate email login
        currentUser = { name: 'User (Email)', email: 'user@email.com' };
    }
    updateUserInfo();
}

// Sign Out User
function signOut() {
    currentUser = null;
    updateUserInfo();
}

// Upload Book
function uploadBook(event) {
    event.preventDefault();
    const bookTitle = document.getElementById('book-title').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookGenre = document.getElementById('book-genre').value;
    const bookFile = document.getElementById('book-file').files[0];

    if (bookTitle && bookAuthor && bookFile) {
        const newBook = {
            title: bookTitle,
            author: bookAuthor,
            genre: bookGenre,
            file: bookFile,
        };
        books.push(newBook);
        alert('Book uploaded successfully!');
        displayBooks();
    } else {
        alert('Please fill all fields.');
    }
}

// Display Books
function displayBooks() {
    const bookContainer = document.getElementById('book-list');
    bookContainer.innerHTML = '';

    books.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <button onclick="viewBook(${index})">View Book</button>
            <button onclick="addToFavorites(${index})">Add to Favorites</button>
        `;
        bookContainer.appendChild(bookElement);
    });
}

// View Book
function viewBook(index) {
    const book = books[index];
    alert(`Opening book: ${book.title}`);
    // Implement logic to display book content or PDF reader
}

// Add Book to Favorites
function addToFavorites(index) {
    const book = books[index];
    if (!favorites.includes(book)) {
        favorites.push(book);
        alert('Book added to favorites!');
    } else {
        alert('This book is already in your favorites.');
    }
}

// Search Books
function searchBooks() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const searchResults = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displaySearchResults(searchResults);
}

// Display Search Results
function displaySearchResults(searchResults) {
    const resultContainer = document.getElementById('search-results');
    resultContainer.innerHTML = '';
    
    if (searchResults.length === 0) {
        resultContainer.innerHTML = '<p>No results found</p>';
        return;
    }

    searchResults.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
        `;
        resultContainer.appendChild(bookElement);
    });
}

// Initialize the App
window.onload = () => {
    updateUserInfo();  // Update user info on page load
    displayBooks();  // Display uploaded books
};
