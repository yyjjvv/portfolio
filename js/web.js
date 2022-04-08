$(function () {
    $(document).scroll(function () {
        let Top = $(document).scrollTop();
        let header = $("#header");
        let headerH = $("#header").height();
        let footerH = $("#footer").height();
        // let secT1 = $(".section").eq(0).offset().top - headerH;
        let secT2 = $(".section").eq(1).offset().top - headerH; //02
        let secT3 = $(".section").eq(2).offset().top - headerH; //03
        let secT4 = $(".section").eq(3).offset().top - headerH; //04
        let secT5 = $(".section").eq(4).offset().top - headerH; //05
        let quick = $("#quick_menu li")

        //Header Background Color
        if (Top >= 0 && Top < secT2) {
            header.css({ background: "var(--bg)" });
            quick.find("a").removeClass("on");
            quick.eq(0).find("a").addClass("on");
        } else if (Top >= secT2 && Top < secT3) {
            header.css({ background: "#fff" });
            quick.find("a").removeClass("on");
            quick.eq(1).find("a").addClass("on");
        } else if (Top >= secT3 && Top < secT4) {
            header.css({ background: "var(--bg)" });
            quick.find("a").removeClass("on");
            quick.eq(2).find("a").addClass("on");
        } else if (Top >= secT4 && Top < secT5) {
            header.css({ background: "#fff" });
            quick.find("a").removeClass("on");
            quick.eq(3).find("a").addClass("on");
        } else {
            header.css({ background: "var(--bg)" });
            quick.find("a").removeClass("on");
            quick.eq(4).find("a").addClass("on");
        };


        //Quick Menu
        quick.find("a").click(function () {
            let target = $(this).attr("href");
            let targetPos = $(target).offset().top - headerH + 1;
            $("html,body").stop().animate({ scrollTop: targetPos }, 800);
            quick.find("a").removeClass("on");
            $(this).addClass("on");
        });
    });

    //Mobile Web Pop-Up
    $(".mweb").on("click", function () {
        $(this).next(".mobile-popup").find(".overlay").fadeIn(200);
        $("body").addClass("hidden");
    });

    $(".mobile-popup .btn-close").on("click", function () {
        $(".mobile-popup .overlay").fadeOut(200);
        $("body").removeClass("hidden");
    });

    //Design Guide Pop-Up
    $(".dg").on("click", function () {
        var or = $(this).parents(".section").index() - 1;
        console.log(or);
        $(".design-guide>.overlay").eq(or).fadeIn(200);
        $("body").addClass("hidden");
    });

    $(".design-guide .popup .btn-x").on("click", function () {
        $(".design-guide>.overlay").fadeOut(200);
        $("body").removeClass("hidden");
    });

    //Validation Pop-Up
    $(".vtest").on("click", function () {
        var or = $(this).parents(".section").index() - 1;
        $(".validation>.overlay").eq(or).fadeIn(200);
        $("body").addClass("hidden");
        let testCate = $(".validation .cate");
        let testTit = $(".validation .tit");
        for (let n = 0; n < $(".validation .overlay").length; n++) {
            testCate.eq(2 * n).find(".tit").addClass("popup-on");
            testCate.eq(2 * n).find(".pic").css({ display: "block" });
        }
        testTit.on("click", function () {
            testTit.removeClass("popup-on");
            $(this).addClass("popup-on");
            testTit.next().css({ display: "none" });
            $(this).next().css({ display: "block" });
        });
    });

    $(".validation .popup .btn-x").on("click", function () {
        $(".validation>.overlay").fadeOut(200);
        $("body").removeClass("hidden");
    });
});