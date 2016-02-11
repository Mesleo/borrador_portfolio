$(document).ready(function() {
    $(function () {
        var alto = $(window).height();
        $('#btn_bottom').click(function () {
            $('body,html').animate({
                scrollTop: alto+30
            }, 900);
            return false;
        });
    });
});