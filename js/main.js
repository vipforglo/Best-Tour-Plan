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
    $(".hotel-right").on("mousemove", function () {
        $(".map__frame").attr(
            "src",
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.041493411216!2d-79.08429287745705!3d43.08262299715547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3430c6c1d7ebb%3A0x2c7d185cef4bebbf!2sHilton%20Niagara%20Falls%2FFallsview%20Hotel%20%26%20Suites!5e0!3m2!1sen!2sru!4v1600949142899!5m2!1sen!2sru"
        );
        $(".hotel-right").off("mousemove");
        $(".map__image").css("display", "none");
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