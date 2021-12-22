$('.first-modal').on('click', function (e) {
    e.preventDefault();
    $('.first-tariff').css({
        zIndex: '1000',
    })
    setTimeout(() => {
        $('.first-tariff').css({
            transform: 'scaleY(1)'
        })
    }, 100);
});

$('.first-tariff').on('click', function () {
    $(this).css({
        transform: 'scaleY(0)',
    });
    setTimeout(() => {
        $(this).css({
            zIndex: '-1000'
        })
    }, 1000);
});



$('.second-modal').on('click', function (even) {
    even.preventDefault();
    $('.second-tariff').css({
        zIndex: '1000',
    })
    setTimeout(() => {
        $('.second-tariff').css({
            transform: 'scaleY(1)'
        })
    }, 100);
});

$('.second-tariff').on('click', function () {
    $(this).css({
        transform: 'scaleY(0)',
    });
    setTimeout(() => {
        $(this).css({
            zIndex: '-1000'
        })
    }, 1000);
});



$('.third-modal').on('click', function (even) {
    even.preventDefault();
    $('.third-tariff').css({
        zIndex: '1000',
    })
    setTimeout(() => {
        $('.third-tariff').css({
            transform: 'scaleY(1)'
        })
    }, 100);
});

$('.third-tariff').on('click', function () {
    $(this).css({
        transform: 'scaleY(0)',
    });
    setTimeout(() => {
        $(this).css({
            zIndex: '-1000'
        })
    }, 1000);
});