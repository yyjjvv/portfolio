$(function () {
    //Isotope Plugin Setting
    const grid = new Isotope(".gallery-wrap", {
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.5s"
    });

    let btns = $(".menu li");
    btns.eq(0).addClass("on");
    btns.click(function (e) {
        e.preventDefault();
        let sort = $(this).find("a").attr("href");
        btns.removeClass("on");
        $(this).addClass("on");
        grid.arrange({
            filter: sort
        });
    });

    //Isotope CSS Transition Bug Solution
    $("article").on("mouseenter", function () {
        $(this).stop().animate({ scale: "1.05" }, 400);
    });
    $("article").on("mouseleave", function () {
        $(this).stop().animate({ scale: "1" }, 400);
    });

    //Overlay Image Popup
    let windowH = $(window).height();
    let popupW = $(".popup").find("img").width();
    let popupH = $(".popup").find("img").height();
    $("article").on("click", function () {
        let or = $(this).index();
        $(".overlay").eq(or).fadeIn(200);
        $("body").css({ overflow: "hidden" });
        popupH = $(".overlay").eq(or).find("img").height();
        popupW = $(".overlay").eq(or).find("img").width();
        if (popupH >= windowH) {
            $(".overlay").eq(or).find(".popup").css("align-items", "flex-start");
        }
    });
    //Overlay Image Popup Close
    $(".popup .btn-x").on("click", function () {
        if ($(this).parent(".mockup").find("iframe")) {
            let iframe = $(this).parent(".mockup").find("iframe");
            iframe.attr('src', iframe.attr('src'));
        }
        $(".overlay").fadeOut(200);
        $("body").css({ overflow: "auto" });
        // $(this).parent(".mockup").find('iframe').attr('src', $('iframe').attr('src'));
    });
});