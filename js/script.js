var menu = document.querySelector('.menu');
var popup_menu = document.querySelector('.popup-menu');
var popup_menu_ul = popup_menu.querySelector('ul');
var popup_menu_ul_a = popup_menu.querySelector('ul > a');

var search = document.querySelector('.search');
var popup_search = document.querySelector('.popup-search');
var popup_search_a = document.querySelector('.popup-search > a');
var popup_search_label = popup_search.querySelector('form');
var popup_search_button = popup_search.querySelector('button');

var user = document.querySelector('.user');
var popup_user = document.querySelector('.popup-user');
var popup_user_div = popup_user.querySelector('div')

//открыть меню
menu.addEventListener('click', function (event) {
    event.preventDefault();
    popup_menu.style.display = "block";
})
//закрыть меню
popup_menu.addEventListener('click', function (event) {
    popup_menu.style.display = "none";
})
//закрыть меню
popup_menu_ul_a.addEventListener('click', function (event) {
    popup_menu.style.display = "none";
})
//перехват всплытия у ul
popup_menu_ul.addEventListener('click', function (event) {
    event.stopPropagation();

})
//закрытие меню при нажатии esc
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        popup_menu.style.display = "none";
    }
})

//открыть поиск
search.addEventListener('click', function (event) {
    event.preventDefault();
    popup_search.style.display = "flex";
})
//закрыть поиск
popup_search.addEventListener('click', function (event) {
    popup_search.style.display = "none";
})
//закрыть поиск
popup_search_a.addEventListener('click', function (event) {
    popup_search.style.display = "none";
})
//закрыть поиск при нажатии esc
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        popup_search.style.display = "none";
    }
})
//перехват всплытия у label
popup_search_label.addEventListener('click', function (event) {
    event.stopPropagation();
})

//открыть вход в личный кабинет
user.addEventListener('click', function (event) {
    event.preventDefault();
    popup_user.style.display = "flex";
})
//закрыть вход в личный кабинет
popup_user.addEventListener('click', function (event) {
    popup_user.style.display = "none";
})
//закрыть вход при нажатии esc
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        popup_user.style.display = "none";
    }
})
//перехват всплытия у div
popup_user_div.addEventListener('click', function (event) {
    event.stopPropagation();

})


// кнопка прокрутки вверх
arrowTop.onclick = function () {
    window.scrollTo(pageXOffset, 0);
};

window.addEventListener('scroll', function () {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

//настройка viewport

var viewPortScale = 1 / window.devicePixelRatio;

$('#viewport').attr('content', 'user-scalable=yes, initial-scale=' + viewPortScale + ', width=device-width');
