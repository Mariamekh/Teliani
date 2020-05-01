$(document).ready(function() {
    $(".header__burger").click(function(event) {

        $(".header__burger, .nav").toggleClass("active");
        $("body").toggleClass("block");


    });

    $(".switcher").click(function(event) {
        $(".rotate").toggleClass("turndown");

    });

    $(".switcher").click(function() {
        if ($(".rotate").hasClass("turndown")) {
            ($(".rotate").removeClass("turnup"));
        } else($(".rotate").addClass("turnup"));
    })



});