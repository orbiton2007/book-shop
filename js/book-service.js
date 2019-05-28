'use strict'

var gBooks;

function createBooks() {
    var books = loadFromStorage('books');
    if (!books || !books.length) {
        var books = [
            createBook(makeId(), 'bobo', 50, 'notebook'),
            createBook(makeId(), 'momo', 60, 'notebook2'),
            createBook(makeId(), 'koko', 70, 'notebook3')];
    }
    gBooks = books;
    saveToStorage('books', gBooks);
}


function createBook(id, name, price, imgUrl) {
    return {
        id: id,
        name: name,
        price: price,
        imgUrl: imgUrl,
        rate: 0
    }
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return (book.id === bookId);
    });
    gBooks.splice(bookIdx, 1);
    saveToStorage('books', gBooks);
}


function updateBookPrice(bookId, bookPrice) {
    var book = getBookById(bookId);
    book.price = +bookPrice;
    saveToStorage('books', gBooks);
}


function addBook(name, price) {
    gBooks.unshift(createBook(makeId(), name, price));
    saveToStorage('books', gBooks);
}

function updateBookRate(bookId, rate) {
    var book = getBookById(bookId);
    book.rate = +rate;
    saveToStorage('books', gBooks);
}