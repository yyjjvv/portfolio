window.onload = function () {
    const progressBar = document.querySelector(".progress");
    const progressText = document.querySelector("p");
    const bodyTag = document.querySelector("body");

    window.addEventListener("scroll", () => {
        let y = window.scrollY;
        let pageHeight = bodyTag.offsetHeight;
        let windowHeight = window.innerHeight;
        let totalHeight = pageHeight - windowHeight;
        let percent = (y / totalHeight) * 100;

        progressBar.style.width = percent + "%";
    });
};

$(function(){
    $(document).scroll(function(){
        let Top = $(document).scrollTop();
        let header = $("#header");
        let headerH = $("#header").height();
        let footerH = $("#footer").height();
        let secT2 = $(".section").eq(1).offset().top - headerH; //02
        let secT3 = $(".section").eq(2).offset().top - headerH; //03
        let secT4 = $(".section").eq(3).offset().top - headerH; //04
        //Header Background Color
        if (Top >= 0 && Top < secT2) {
            header.css({ background: "var(--bg)" });
        } else if (Top >= secT2 && Top < secT3) {
            header.css({ background: "#fff" });
        } else if (Top >= secT3 && Top < secT4) {
            header.css({ background: "var(--bg)" });
        } else {
            header.css({ background: "#fff" });
        };
    });
});