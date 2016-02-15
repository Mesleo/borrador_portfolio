/**
 * Created by anonimo1 on 02/02/2016.
 */
($(function(){

    function onResizeBanner() {
        if (ancho >= 750) {
            $('#cabecera').css({
                'top': '104%'
            });
            $('#container').css('top', '150%');
            $('.banner').css('background-image', 'none');
            switch (archivo) {
                case 'index.html':
                    content = 'media/videos/home.mp4';
                    textoName = 'Javier Benítez del Pozo';
                    break;
                case 'works.html':
                    content = 'media/videos/my_works.mp4';
                    textoName = 'Mis trabajos';
                    break;
                case 'about.html':
                    content = 'media/videos/about_me.mp4';
                    textoName = 'Sobre mí';
                    break;
                case 'contact.html':
                    content = 'media/videos/contacts.mp4';
                    textoName = 'Contacto';
                    break;
            }
            var v = document.getElementsByTagName("video")[0];
            if (v) {
                banner.css('min-height', alto);
                video.css({
                    'width': '100%',
                    'min-height': alto
                });
                video.attr('autoplay', true);
                v.play();
            }
        }
    }

    function comprobarAnchura(){
        ancho = $(window).innerWidth();
        console.log(ancho);
        if(ancho < 750){
            banner.children('video').css('display', 'none');
        }
    }

    {
        var ancho = $(window).innerWidth();
        var alto = $(window).height();
        var textoName;
        var banner = $('.banner');
        var content;
        var archivo = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
        $(window).resize(onResizeBanner);
        $(window).load(onResizeBanner);
    }
}));