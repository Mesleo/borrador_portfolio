/**
 * Created by anonimo1 on 02/02/2016.
 */
$(document).ready()
{
    var a = false;
    var b = false;
    // Despliega el menu lateralmente para las pantallas con poca anchura de resolución: móviles y tablets
    $('nav').css('transform', 'translateX(-150%)');
    $('.icon-menu').click(function(){
        if(b==false) {
            $('nav').css('transform', 'translateX(0%)');
            b = true
        }
        else {
            b = false;
            $('nav').css('transform', 'translateX(-150%)');
        }
    });
    // Despliega los submenús si los hubiera
    $('.submenu').click(function(){
        if(a==false) {
            $(this).children('ul').stop(true, true).slideDown('slow');
            a = true;
            $(this).animate({ paddingLeft: '-150px' }, 200);
        }else {
            a=false;
            $(this).children('ul').stop(true, true).slideUp('slow');
            $(this).animate({ paddingLeft: 0 }, 200);
        }
    });
    // Cuando pinchas sobre un elemento href con enlace a la misma página se activa la animación de ir hacia
    // dicho enlace en 0.9 segundos
    $('a.ancla').click(function(e){
        var archivo = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
        b = false;
        if(archivo == 'works.html') {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 900);
            $('nav').css('transform', 'translateX(-100%)');
        }
    });
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
}