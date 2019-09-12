//зум на фото
$(document).ready(function () {
    $('div.image').zoom();
});


//ajax загрузка
var label_button_description = document.getElementById("label-button-description");
label_button_description.addEventListener('click', function () {
    $('#description').load("../html/description.html");
});

var label_button_comments = document.getElementById('label-button-comments');
label_button_comments.addEventListener('click', function () {
    $('#comments').load("../html/comments.html");
});


//смена фото при клике
var scroll_image = document.querySelectorAll('.image-for-scroll');
var big_image = document.getElementById('big-image');



for (var i = 0; i < scroll_image.length; i++) {
    scroll_image[i].addEventListener('click', function () {

        big_image.src = this.src

        $(document).ready(function () {
            $('div.image').zoom();
        });
    })
}

//слайдер с фотографиями товара

var height = 156; // высота картинки
var position = 0; // положение ленты прокрутки

var scroll_image_button_up = document.getElementById('scroll-image-button-up');
var scroll_image_button_down = document.getElementById('scroll-image-button-down');

var list_image = document.querySelectorAll('.scroll-image ul li')


var max_scroll = height * (list_image.length - 1)

scroll_image_button_up.onclick = function () {
    if (position < max_scroll) {
        position += height;
        for (var i = 0; i < list_image.length; i++) {
            list_image[i].style.transform = "translateY(-" + position + "px)"
        }
    }
    console.log(position)
};

scroll_image_button_down.onclick = function () {
    if (position > 0 && position <= max_scroll) {
        position -= height;
        for (var i = 0; i < list_image.length; i++) {
            list_image[i].style.transform = "translateY(-" + position + "px)"
        }
    }
    console.log(position)
};
