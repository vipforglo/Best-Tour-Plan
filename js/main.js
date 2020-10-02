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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
    console.log("Клик по кнопке меню");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
});