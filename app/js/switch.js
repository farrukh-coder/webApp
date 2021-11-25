var aboutSwitch = $("input[name='about-switch']");
var aboutContent = $(".about-content");



aboutSwitch.on('click', function(){  
    // var index = $(this).index();
    // $('.about-content').addClass('enable-about-content');
    
    for(var i = 0; i < aboutSwitch.length; i++){
        if(aboutSwitch[i].checked){
            // aboutContent[i].classList.add('enable-about-content');
            aboutContent.eq(i).addClass('enable-about-content').siblings().removeClass('enable-about-content');
            
        }
    }
    
});