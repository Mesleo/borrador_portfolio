/**
 * Created by anonimo1 on 11/02/2016.
 */

$(function(){
    // Hace que aparezca la flecha de ir hacia arriba cuando se ha bajado lo suficiente y le da un efecto de subida de
    // 0.9 segundos
    $("#div_top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#div_top').fadeIn();
            } else {
                $('#div_top').fadeOut();
            }
        });
        $('#btn_top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 900);
            return false;
        });
    });
});