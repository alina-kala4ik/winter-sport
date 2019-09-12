//поиск снизу хедера
var bottom_button_search = document.querySelector('.bottom-button-search');

var search = bottom_button_search.querySelector('.icon-search-solid');
var close = bottom_button_search.querySelector('.icon-times-solid');

var bottom_popup_search = document.querySelector('.bottom-popup-search');

search.addEventListener('click', function (event) {
    event.preventDefault();
    search.style.display = "none";
    close.style.display = "block";
    bottom_popup_search.style.display = "block";
});

close.addEventListener('click', function (event) {
    event.preventDefault();
    close.style.display = "none";
    search.style.display = "block";
    bottom_popup_search.style.display = "none";
})
