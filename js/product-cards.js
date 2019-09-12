//переключение между табличным и линейным видом карточек товара
var table = document.querySelector('label[for="table"]');
var line = document.querySelector('label[for="line"]');
var poducts = document.querySelector('.poducts');

table.addEventListener('click', function () {
    if (poducts.classList.contains('line')) {
        poducts.className = "table poducts";
    }
});

line.addEventListener('click', function () {
    if (poducts.classList.contains('table')) {
        poducts.className = "line poducts";
        var all_links = document.querySelectorAll('.poduct');
        for (var i = 0; i < all_links.length; i++) {
            all_links[i].addEventListener('click', function (event) {
                event.preventDefault();
            })
        }
        var button_about_prodact = document.querySelectorAll('.about-prodact');
        for (var y = 0; y < button_about_prodact.length; y++) {
            button_about_prodact[y].addEventListener('click', function (event) {
                event.preventDefault();
                document.location.href = "../html/products-about.html"
            })
        }
    }
});


//показать фильтры для товаров на мобильном устройстве
var button_filters = document.querySelector('.button-filters');
var filters = document.querySelector('.filters');

button_filters.addEventListener('click', function (event) {
    event.preventDefault();
    var display_now = window.getComputedStyle(filters).display;
    if (display_now === 'block') {
        filters.style.display = 'none'
    } else {
        filters.style.display = 'block'
    }
});

var scroll_image_prodact = document.querySelectorAll('.scroll-image-prodact');

for (var i = 0; i < scroll_image_prodact.length; i++) {

    var children = scroll_image_prodact[i].children
    console.log(children)

    switch (children.length) {
        case 2:
            scroll_image_prodact[i].className = "scroll-image-prodact anim2";
            break;
        case 3:
            scroll_image_prodact[i].className = "scroll-image-prodact anim3";
            break;
        case 4:
            scroll_image_prodact[i].className = "scroll-image-prodact anim4";
            break;
        case 5:
            scroll_image_prodact[i].className = "scroll-image-prodact anim5";
            break;
        case 6:
            scroll_image_prodact[i].className = "scroll-image-prodact anim6";
            break;
        case 7:
            scroll_image_prodact[i].className = "scroll-image-prodact anim7";
            break;
        case 8:
            scroll_image_prodact[i].className = "scroll-image-prodact anim8";
            break;
        case 9:
            scroll_image_prodact[i].className = "scroll-image-prodact anim9";
            break;
        case 10:
            scroll_image_prodact[i].className = "scroll-image-prodact anim10";
            break;
    }
}
