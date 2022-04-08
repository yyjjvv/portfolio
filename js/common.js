$(function () {
    $(".hamburger").click(function () {
        if ($("#header").hasClass("on") == false) {
            $("#header").addClass("on");
            $(".hamburger").addClass("active");
            $("body").css({ overflow: "hidden" });
        } else {
            $("#header").removeClass("on");
            $(".hamburger").removeClass("active");
            $("body").css({ overflow: "auto" });
        }
    });
});