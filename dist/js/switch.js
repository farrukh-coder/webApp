var aboutSwitch = $("input[name='about-switch']"),
    aboutContent = $(".about-content");

var portfolioSwitch = $("input[name='portfolio-switch']"),
    portfolioContent = $(".portfolio-cover");

var aboutLength = 1,
    portfolioLength = 0;

aboutSwitch.on('click', switchAbout);

function switchAbout() {
    for (var i = 0; i < aboutSwitch.length; i++) {
        if (aboutSwitch[i].checked) {
            // aboutContent[i].classList.add('enable-about-content');
            aboutContent.eq(i).addClass('enable-about-content').siblings().removeClass('enable-about-content');
            aboutLength = i;
        }
    }
}

function switchAboutTimer() {
    if (aboutLength < aboutSwitch.length) {
        aboutSwitch.eq(aboutLength).prop('checked', true).siblings().removeAttr('checked');
        aboutContent.eq(aboutLength).addClass('enable-about-content').siblings().removeClass('enable-about-content');
        aboutLength++;
    } else {
        aboutLength = 0;
        clearInterval(switchAboutTimer);
    }
}
setInterval(switchAboutTimer, 8000);



portfolioSwitch.on('click', switchPortfolio);

function switchPortfolio() {
    for (var j = 0; j < portfolioSwitch.length; j++) {
        if (portfolioSwitch[j].checked) {
            portfolioContent.eq(j).addClass('enable-portfolio-cover').siblings().removeClass('enable-portfolio-cover');
            portfolioLength = j;
        }
    }
}

function switchPortfolioTimer() {
    if (portfolioLength < portfolioSwitch.length) {
        portfolioSwitch.eq(portfolioLength).prop('checked', true).siblings().removeAttr('checked');
        portfolioContent.eq(portfolioLength).addClass('enable-portfolio-cover').siblings().removeClass('enable-portfolio-cover');
        portfolioLength++;
    } else {
        portfolioLength = 0;
    }
}

setInterval(switchPortfolioTimer, 5000);