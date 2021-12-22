var offerBlocksM = $(".offer-blocks-m"), 
    switchsM = $('input[name="offers-switch"]'),
    offerMoblieLength = 0;


switchsM.on('click', switchsMobile);

function switchsMobile() {
    for(var l = 0; l < switchsM.length; l++){
        if(switchsM[l].checked){
            offerBlocksM.eq(l).addClass('offer-active').siblings().removeClass('offer-active');
            offerMoblieLength = l;
        }
    }
}

function switchMobTimer() {
    if(offerMoblieLength < switchsM.length){
        switchsM.eq(offerMoblieLength).prop('checked', true).siblings().removeAttr('checked');
        offerBlocksM.eq(offerMoblieLength).addClass('offer-active').siblings().removeClass('offer-active');
        offerMoblieLength++;
    } else{
        offerMoblieLength = 0;
    }
}

setInterval(switchMobTimer, 3000);