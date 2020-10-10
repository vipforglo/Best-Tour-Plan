// 'use strict';
// var multiItemSlider = (function () {
//   return function (selector) {
//     var
//       _mainElement = document.querySelector('.swiper-container'), // основный элемент блока
//       _sliderWrapper = _mainElement.querySelector('.swiper-wrapper'), // обертка для .slider-item
//       _sliderItems = _mainElement.querySelectorAll('.hotel-slider__item'), // элементы (.slider-item)
//       _sliderControls = _mainElement.querySelectorAll('.hotel-slider__button'), // элементы управления
//       _sliderControlLeft = _mainElement.querySelector('.hotel-slider__button--prev'), // кнопка "LEFT"
//       _sliderControlRight = _mainElement.querySelector('.hotel-slider__button--next'), // кнопка "RIGHT"
//       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
//       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
//       _positionLeftItem = 0, // позиция левого активного элемента
//       _transform = 0, // значение трансформации .slider_wrapper
//       _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
//       _items = []; // массив элементов
      
//     // наполнение массива _items
//     _sliderItems.forEach(function (item, index) {
//       _items.push({ item: item, position: index, transform: 0 });
//     });

//     var position = {
//       getMin: 0,
//       getMax: _items.length - 1,
//     }

//     var _transformItem = function (direction) {
//       if (direction === 'right') {
//         if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
//           return;
//         }
//         if (!_sliderControlLeft.classList.contains('slider__control_show')) {
//           _sliderControlLeft.classList.add('slider__control_show');
//         }
//         if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
//           _sliderControlRight.classList.remove('slider__control_show');
//         }
//         _positionLeftItem++;
//         _transform -= _step;
//       }
//       if (direction === 'left') {
//         if (_positionLeftItem <= position.getMin) {
//           return;
//         }
//         if (!_sliderControlRight.classList.contains('slider__control_show')) {
//           _sliderControlRight.classList.add('slider__control_show');
//         }
//         if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
//           _sliderControlLeft.classList.remove('slider__control_show');
//         }
//         _positionLeftItem--;
//         _transform += _step;
//       }
//       _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
//     }

//     // обработчик события click для кнопок "назад" и "вперед"
//     var _controlClick = function (e) {
//       if (e.target.classList.contains('slider__control')) {
//         e.preventDefault();
//         var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
//         _transformItem(direction);
//       }
//     };

//     var _setUpListeners = function () {
//       // добавление к кнопкам "назад" и "вперед" обработчика _controlClick для события click
//       _sliderControls.forEach(function (item) {
//         item.addEventListener('click', _controlClick);
//       });
//     }

//     // инициализация
//     _setUpListeners();

//     return {
//       right: function () { // метод right
//         _transformItem('right');
//       },
//       left: function () { // метод left
//         _transformItem('left');
//       }
//     }

//   }
// }());
$(document).ready(function () {
    var hotelSlider = new Swiper(".hotel-slider", {
        // Optional parameters
        loop: true,

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".hotel-slider__button--next",
            prevEl: ".hotel-slider__button--prev",
        },
        effect: "coverflow",
    })

    // Карты
    $(".hotel-right").on("mousemove", function () {
        $(".map__frame").attr(
            "src",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.041493411216!2d-79.08429287745705!3d43.08262299715547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3430c6c1d7ebb%3A0x2c7d185cef4bebbf!2sHilton%20Niagara%20Falls%2FFallsview%20Hotel%20%26%20Suites!5e0!3m2!1sen!2sru!4v1600949142899!5m2!1sen!2sru"
        );
        $(".hotel-right").off("mousemove");
        $(".map__image").css("display", "none");
    });

      $(".hotel").on("mousemove",
    function () {
      reviewSlider.keyboard.disable();
      hotelSlider.keyboard.enable();
    });
  $(".reviews").on("mousemove",
    function () {
      hotelSlider.keyboard.disable();
      reviewSlider.keyboard.enable();
    });

    var reviewsSlider = new Swiper(".reviews-slider", {
        // Optional parameters
        loop: true,

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".reviews-slider__button--next-second",
            prevEl: ".reviews-slider__button--prev-first",
        },
    })

    $(".newsletter").parallax({
        imageSrc: "./img/newsletter-bgjpg.jpg"
    });
   
    var menuButton = $(".menu-button");
    menuButton.on("click", function () {
        $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    });

    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);

    function openModal() {
        var targetModal = $(this).attr("data-href");
        $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
        $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }
    // Обработка форм
    $('.form').each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "Name must be more than 2 words",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Email address must be with @domain",
                },
                phone: {
                    required: "Phone is required",
                    minlength: "Please enter at least 10 characters"
                },
            },
        });
    });
    $(document).ready(function () {
        $(".phoneadd").mask("+7(999)999-9999");
    });
    AOS.init();
    $('.form-nored').each(function () {
        $(this).validate({
            errorClass: "invalid-nored",
            messages: {
                email: {
                    required: "We need your email address to contact you",
                    email: "Email address must be with @domain",
                },
            },
        });
    });
  
});