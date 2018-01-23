console.log('\'Allo \'Allo!');
var year = (new Date).getFullYear();

$(document).ready(function () {
    $('#year').text(year);


    $('.menu-movil').click(function(){
        $('.hamburger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });
    $('.navbar-item').click(function () {
        $('.hamburger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    $('.navbar a').click(function () {
        $('.navbar-end a.is-link-active').removeClass('is-link-active');
        $(this).addClass('is-link-active');
    });

    var navbar = $('.navbar').height();

    $(window).scroll(function () {
        var href = $(this).scrollTop();

        $('.navbar-item').each(function (event) {
          
            if (href >= $($(this).attr('href')).offset().top - navbar *2) {
                $('.navbar a.is-link-active').removeClass('is-link-active');
                $(this).addClass('is-link-active');
            }
          

        });
    });
    });
