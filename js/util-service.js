function makeId() {
    var length = 6;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function getBookById(bookId) {
    return gBooks.find(function (book) {
        return (book.id === bookId);
    });
}


function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}


function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function sortByName() {
    gBooks.sort(function (a, b) {
        var txtA = a.name.toUpperCase();
        var txtB = b.name.toUpperCase();
        if (txtA < txtB) {
            return -1;
        }
        if (txtA > txtB) {
            return 1;
        }
        return 0;
    });
}

function sortByPrice() {
    gBooks.sort(function (a, b) {
        return a.price - b.price;
    });
}