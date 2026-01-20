$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
})
$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.header__menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.header__menu').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.header__menu').removeClass('transition-menu');
        }
    });
    $('.header__menu ul li a').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.header__menu').removeClass('transition-menu');
        $('body').removeClass('body_fix');
    })
});







let directionsSwiper = new Swiper(".our-directions__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 2,
    pagination: {
        el: ".directions-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".directions-button-next",
        prevEl: ".directions-button-prev",
    },
});



let contactSwiper = new Swiper(".contact__slider", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 15,
    breakpoints: {
        '1399': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 40,

        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 3,

        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 3,

        },
    },
});





let classesSwiper = new Swiper(".classes__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 2,
    pagination: {
        el: ".classes-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".classes-button-next",
        prevEl: ".classes-button-prev",
    },
});

