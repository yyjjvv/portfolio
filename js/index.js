$(function () {
    //Typing Effect
    var typing = new Typed(".typed", {
        strings: ["FRONT-END {DEVELOPER}"],
        typeSpeed: 60,
        autoStart: true,
        startDelay: 1400,
        loop: false,
    });

    $(document).scroll(function () {
        let winT = $(window).height();
        let Top = $(document).scrollTop();
        let headerH = $("#header").height();
        let secT1 = $(".section").eq(0).offset().top - headerH; //about top
        let secT2 = $(".section").eq(1).offset().top - headerH; //resume top
        let secT3 = $(".section").eq(2).offset().top - headerH;//portfolio top
        let secT4 = $(".section").eq(3).offset().top - headerH;//contact top
        let resumeH = $(".about .resume li").eq(0).offset().top - winT;
        let graphH = $(".skill .gr-area").offset().top - winT;
        let decoH = $(".contact .deco").offset().top - winT;

        //Header Background Color
        if (Top >= secT1 && Top < secT2) {
            $("#header").css({ background: "var(--bg)" });
        } else if (Top >= secT2 && Top < secT3) {
            $("#header").css({ background: "#fff" });
        } else if (Top >= secT3 && Top < secT4) {
            $("#header").css({ background: "var(--bg)" });
        } else if (Top >= secT4) {
            $("#header").css({ background: "#fff" });
        }

        //Resume Responsive
        if (Top >= resumeH && Top < secT2) {
            $(".about .resume li").eq(0).stop().animate({ opacity: 1, top: 0 }, 600);
            $(".about .resume li").eq(1).stop().delay(400).animate({ opacity: 1, top: 0 }, 600);
            $(".about .resume li").eq(2).stop().delay(800).animate({ opacity: 1, top: 0 }, 600);
        }
        // else{
        //     $(".about .resume li").css({opacity:0, top:"20px"});
        // }


        //Graph Responsive
        if (Top >= graphH && Top < secT3) {
            $(".gr").removeClass("on");
            $(".gr").addClass("on");
        } else {
            $(".gr").removeClass("on");
        }
    });

    //Portfolio img Height
    let picW = $(".portfolio .goto .pic").width();
    $(".portfolio .goto .pic").height(picW);
    $(window).resize(function () {
        picW = $(".portfolio .goto .pic").width();
        $(".portfolio .goto .pic").height(picW);
    });

    //Go to top!
    $(".btn-top").click(function () {
        $("html,body").stop().animate({ scrollTop: 0 }, 600);
    });
});