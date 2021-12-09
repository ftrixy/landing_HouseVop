
$(function(){

    $(".menu a, .header a, .footer a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.gallery__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        pauseOnHover: true,
    });

    $('.header__burger').on('click', function(){
        $('.header__menu').toggleClass('header__menu--active');
        $('.header__burger').toggleClass('header__burger--active');
        $('.body').toggleClass('body--active');
    });
});

