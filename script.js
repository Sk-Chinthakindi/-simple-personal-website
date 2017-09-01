$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});



//        Responsive menu display and hide
$(document).ready(function () {
    $(".btn-menu").on('click', function () {
        $(".navbar-custom").slideToggle("slow");
        $("a").click(function () {
            $(".navbar-custom").slideUp("slow");
        });
    });
});



$(window).resize(function () {
    if ($(window).maxWidth > 640) {
        $(".navbar-custom").removeAttr("style");

    }
});

$('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, "slow", 'swing', function () {
        window.location.hash = target;
    });
});

/*$(document).ready(function(){
    $(body).scroll(function(){
        $('navbar-custom a').css("color","orange")
    });
});*/

$(function () {
    $(".custom-top a").click(function (e) {
        e.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
});
