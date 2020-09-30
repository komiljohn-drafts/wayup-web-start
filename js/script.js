$(function () {
    $(window).scroll(function () {
        $('#aims h2').each(function () {
            var elem = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (elem < topOfWindow + 650)
                $(this).addClass('animate__fadeInDown');
        });
    });
    $(window).scroll(function () {
        $('.aim-box').each(function () {
            var elem = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (elem < topOfWindow + 650)
                $(this).addClass('animate__fadeInUp');
        });
    });
    $(window).scroll(function () {
        $('#forms h2').each(function () {
            var elem = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (elem < topOfWindow + 650)
                $(this).addClass('animate__fadeInDown');
        });
    });
    $(window).scroll(function () {
        $('.form').each(function () {
            var elem = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (elem < topOfWindow + 650)
                $(this).addClass('animate__fadeInUp');
        });
    });
});