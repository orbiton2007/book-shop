'use strict'


$(document).ready(onInit);

function onInit() {
    createBooks();
    renderBooks();
}


function renderBooks() {
    var strHTML = '';
    gBooks.forEach(function (book, idx) {
        strHTML += `<tr>
                        <th scope="row">${idx}</th>
                        <td><img src="img/${book.imgUrl}.png" alt="image-car"></td>
                        <td>${book.name}</td>
                        <td>${book.price}</td>
                        <td><a href="#" class="btn btn-primary" onclick="onReadBook('${book.id}')">details</a></td>
                        <td><a href="#" class="btn btn-warning" onclick="onReadAndUpdateBook('${book.id}')">Update</a></td>
                        <td><a href="#" class="btn btn-danger" onclick="onDeleteBook('${book.id}')">Delete</a></td>
                    </tr>`
    });
    $('tbody').html(strHTML);
}


function onDeleteBook(bookId) {
    deleteBook(bookId);
    renderBooks();
}


function onReadAndAddNewBook() {
    var $modal = $('.modal')
    $modal.find('.modal-header h5').text('Add Book')
    $modal.find('.modal-body').html(`<p><input type="text" class="new-name-input" onchange="onCheckName(this.value)" placeholder="Enter name">
    <span class="new-name-input-msg"></span></p>
    <p><input type="text" class="new-price-input" placeholder="Enter price"></p>`);
    $modal.find('.btn-primary').show();
    $modal.find('.btn-primary').click(function () {
        onAddBook();
        onCloseModal();
    });
    $modal.show()
}


function onReadAndUpdateBook(bookId) {
    var $modal = $('.modal')
    $modal.find('.modal-header h5').text('Updat Book')
    $modal.find('.modal-body').html(`<p><input type="text" class="price-input" placeholder="Enter price"></p>`);
    $modal.find('.btn-primary').show();
    $modal.find('.btn-primary').click(function () { onUpdatePrice(`${bookId}`); onCloseModal(); });
    $modal.show()
}

function onReadBook(bookId) {
    var book = getBookById(bookId);
    var $modal = $('.modal')
    $modal.find('.btn-primary').hide();
    $modal.find('.modal-header h5').text('Book Details')
    $modal.find('.modal-body').html(`<p><img src="img/${book.imgUrl}.png" alt="image-car"></p><p>Name: ${book.name}</p>
    <p>Price: ${book.price}</p><label>Rate: <input type="number" class="rate-input" value="${book.rate}" onchange="onSetRate('${book.id}', this.value)" min="0" max="10"></label>`);
    $modal.show()
}


function onCloseModal() {
    $('.modal').hide();
}

function onCheckName(name) {
    gBooks.forEach(function (book) {
        if (book.name === name) {
            $('.btn-primary').hide();
            $('.new-name-input-msg').show();
            $('.new-name-input-msg').text('Name already exists');
        }
    });
}

// add too much
function onAddBook() {
    var name = $('.new-name-input').val();
    var price = $('.new-price-input').val();
    addBook(name, price);
    renderBooks();
}


function onUpdatePrice(bookId) {
    var bookPrice = $('.price-input').val();
    updateBookPrice(bookId, bookPrice);
    renderBooks();

}

function onSetRate(bookId, rate) {
    updateBookRate(bookId, rate);
}


function onDropdown() {
    $('.dropdown-menu').show();
}

function onSortByName() {
    $('.dropdown-menu').hide();
    sortByName();
    renderBooks();
}


function onSortByPrice() {
    $('.dropdown-menu').hide();
    sortByPrice();
    renderBooks();
}