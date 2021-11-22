var headerMenu = $('.header-menu');
var sidebar = $('.hidden-sidebar');
var sidebarButton = $('.sidebar button');
var noneSidebar = $('.none-sidebar');

headerMenu.on('click', function (e) {
    e.preventDefault();
    sidebar.addClass('visible-sidebar');
});

sidebarButton.on('click', function (e) {
    e.preventDefault();
    sidebar.removeClass('visible-sidebar');
});

noneSidebar.on('click', function (e) {
    e.preventDefault();
    sidebar.removeClass('visible-sidebar');
})