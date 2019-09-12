 //обработчик собятия - наведения на всплывающее меню на главной странице
 var button_for_popup_background = document.querySelector('.button-for-popup-background');

 //реагирует на изменение ширины окна брузера
 window.addEventListener('resize', function (event) {
     var width_body = document.documentElement.clientWidth;
     if (width_body <= 900) {
         button_for_popup_background.addEventListener('mouseover', function () {
             document.getElementById('popup-background').style.display = 'none';
         })
     } else {
         button_for_popup_background.addEventListener('mouseover', function () {
             document.getElementById('popup-background').style.display = 'block';
         })
     }
 });

 //срабатывает при изначальной загрузке страницы в указанных размерах
 if (window.matchMedia("(min-width: 900px)").matches) {
     button_for_popup_background.addEventListener('mouseover', function () {
         document.getElementById('popup-background').style.display = 'block';
     })
 } else {
     button_for_popup_background.addEventListener('mouseover', function () {
         document.getElementById('popup-background').style.display = 'none';
     })
 }

 //добавляет обработчик события когда мышь покидает элемент
 button_for_popup_background.addEventListener('mouseout', function () {
     document.getElementById('popup-background').style.display = 'none';
 })
 //автоматический расчет ширины блока с логотипами брендов
 var body = document.querySelector('body');
 var brends = document.querySelector('.brends');
 brends.style.width = Math.floor(body.offsetWidth / 200) * 200 + 'px';
 //автоматический расчет ширины блока с логотипами брендов при изменении ширины экрана
 window.addEventListener('resize', function (event) {
     var body = document.querySelector('body');
     var brends = document.querySelector('.brends');
     brends.style.width = Math.floor(body.offsetWidth / 200) * 200 + 'px';
 })

 //слайдер с брендами

 var background_posinionX = [];

 for (var i = 220; i <= 3080; i += 220) {
     background_posinionX.push(i);
 };

 var containers_for_brends_image = document.querySelectorAll('.brends div');

 var first_position = 0;

 f = function () {
     for (var i = 0; i < containers_for_brends_image.length; i++) {
         var position = ((first_position + i) >= background_posinionX.length) ? first_position + i - background_posinionX.length : first_position + i;

         containers_for_brends_image[i].style.backgroundPositionX = '-' + background_posinionX[position] + 'px';
     }

     first_position = (first_position < (background_posinionX.length - 1)) ? first_position += 1 : 0;
     setTimeout(f, '6000')
 }
 f();
