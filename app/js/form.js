var inputs = $('.form-send input');
var button = $('.form-send button');

inputs.on('focus', function () {
    
    inputs.animate({
        fontSize: '1em',
        padding: '20px 15px'
    })
    
    inputs.addClass('input-focus');
    button.addClass('input-focus');
});

inputs.on('blur', function(){
    inputs.animate({
        fontSize: '0.8em',
        padding: '20px 0'
    });
    
    inputs.removeClass('input-focus');
    button.removeClass('input-focus');
});