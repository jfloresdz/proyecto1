$(document).ready(function () {

    $("#banner").css({ "height": $(window).height() + "px" });

    var flag = false;
    var scroll;

    $(window).scroll(function () {
        scroll = $(window).scrollTop();

        if (scroll > 100) {
            if (!flag) {
                $("#logo").css({ "margin-top": "-5px", "width": "200px", "height": "50px" });

                $("header").css({ "background-color": "#3C3C3C" });
                flag = true;
            }
        } else {
            if (flag) {
                $("#logo").css({ "margin-top": "0px", "width": "200px", "height": "50px" });

                $("header").css({ "background-color": "transparent" });
                flag = false;
            }
        }


    });

});