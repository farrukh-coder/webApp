$('.card-p').on('click', function () {
    $(this).children().animate({
        height: '100%',
        width: '100%',
        borderRadius: '10px',
        bottom: '0',
        left: '0'
    }, 100);
    $('.card-bg > img', this).css({
        transform: 'scale(1.4)',
        transition: '0.4s'
    });

    setTimeout(() => {
        $('.card-circle > ', this).animate({
            opacity: '1'
        }, 200);
        $('.card-circle > a', this).addClass('enable-circle-link');
    }, 100);
});


$('.card-p').on('mouseleave', function () {
    setTimeout(() => {
        $('.card-circle > ', this).animate({
            opacity: '0'
        }, 100);
        $('.card-bg > img').css({
            transform: 'scale(1)',
            transition: '0.4s'
        });


    }, 800);

    setTimeout(() => {
        if ($('.card-p').css('width') <= '400px') {
            $('.card-circle', this).animate({
                height: '40px',
                width: '40px',
                borderRadius: '50%',
                bottom: '15px',
                left: '20px',
            }, 300);
        } else {
            $('.card-circle', this).animate({
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                bottom: '20px',
                left: '20px',
            }, 300);
        }
        $('.card-circle > a', this).removeClass('enable-circle-link');
    }, 1000);
});