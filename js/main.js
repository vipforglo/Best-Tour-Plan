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
        effect: "flip",
    })

    // Карты

    var reviewsSlider = new Swiper(".reviews-slider", {
        // Optional parameters
        loop: true,

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".reviews-slider__button--next",
            prevEl: ".reviews-slider__button--prev",
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
                },
            },
        });
    });
    $(document).ready(function () {
        $(".phoneadd").mask("+7(999) 999-9999");
    });
    AOS.init();
    $('.form__nored').each(function () {
        $(this).validate({
            errorClass: "invalid__nored",
            messages: {
                email: {
                    required: "We need your email address to contact you",
                    email: "Email address must be with @domain",
                },
            },
        });
    });
});