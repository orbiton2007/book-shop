var gTrans = {
    'title': {
        en: 'Books Shop',
        // es: 'hacer',
        he: 'חנות ספרים'
    },
    'sort': {
        en: 'Sort',
        // es: 'MVC - Modelo-Vista-Controlador',
        he: 'מיון',
    },
    'name': {
        en: 'Name',
        // es: 'Todos',
        he:'שם',
    },
    'price': {
        en: 'Price',
        // es: 'Activo',
        he: 'מחיר'
    },
    'add book': {
        en: 'Add Book',
        // es: 'Completo',
        he: 'הוסף ספר',
    },
    'picture': {
        en: 'Picture',
        // es: 'Hacer',
        he: 'תמונה',
    },
    'title-header-table': {
        en: 'Title',
        // es: 'Activo',
        he: 'כותרת',
    },
    'Save changes': {
        en: 'Save changes',
        // es: 'Aggregar',
        he: 'שמור שינויים',
    },
    'close': {
        en: 'close',
        // es: 'Estas Seguru?',
        he: 'סגור',
    },
    // 'add-todo-placeholder': {
    //     en: 'What needs to be done?',
    //     es: 'Que te tienes que hacer?',
    //     he: 'מה יש לעשות?'
    // }
}

var gCurrLang = 'en';

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        // var transKey = el.getAttribute('data-trans');
        var transKey = el.dataset.trans;
        
        var txt = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}


function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}


function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he',{ style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang,options).format(time);
}


function kmToMiles(km) {
    return km / 1.609;
}