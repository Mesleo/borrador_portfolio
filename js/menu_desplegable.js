/**
 * Created by anonimo1 on 11/02/2016.
 */

$(function() {

    var b = false;
    var a = false;
    var archivo = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    var bannerHome = $("#banner-home");
    var cabecera = $("#cabecera");

    $(window).resize(onResize);
    var anchura = $(window).width();

    function onResize(){
        anchura = $(window).width();
    }

    if (anchura < 750){
        funcionResolucionMovil();
        desplegarMenus(anchura);
    }else {
        desplegarMenus(anchura);
    }

    // Despliega los submenús si los hubiera
    function desplegarMenus(anchura) {
        $('.submenu').hover(function (e) {
            console.log(anchura);

            if (a == false) {
                $(this).children('ul').stop(true, true).slideDown('slow');
                a = true;
                $(this).animate({paddingLeft: '-150px'}, 200);
            } else {
                a = false;
                $(this).children('ul').stop(true, true).slideUp('slow');
                $(this).animate({paddingLeft: 0}, 200);
            }
        });
        // Cuando pinchas sobre un elemento href con enlace a la misma página se activa la animación de ir hacia
        // dicho enlace en 0.9 segundos
        $('a.ancla').click(function (e) {
            b = false;
            if (archivo == 'works.html') {
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 900);
                if(anchura < 750)
                $('nav').css('transform', 'translateX(-100%)');
            }
        });
    }

    function funcionResolucionMovil() {
        // Despliega el menu lateralmente para las pantallas con poca anchura de resolución: móviles y tablets
        $('nav').css('transform', 'translateX(-150%)');
        $('.icon-menu').click(function () {
            if (b == false) {
                $('nav').css('transform', 'translateX(0%)');
                b = true
            }
            else {
                b = false;
                $('nav').css('transform', 'translateX(-150%)');
            }
        });
    }
});