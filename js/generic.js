/**
 * Created by anonimo1 on 02/02/2016.
 */
$(function(){
    {
        var a = false;
        var b = false;
        var ancho = $(window).width();
        var alto = $(window).height();
        var textoName;
        var content;
        var archivo = location.pathname.substring(location.pathname.lastIndexOf('/')+1);

        if(ancho >= 750){
            $('#cabecera').css({
                'top': '104%',
                //'margin-bottom': '180px'
            });
            $('#container').css('top', '150%');
            $('.banner').css('background-image', 'none');
            switch (archivo){
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
            var video = $("<video />",
                {
                    id: "banner", //atributo directo, igual que si fuéramos con attr(“id”)
                    src: content,
                    loop: 1
                });
            var banner = $('.banner');
            banner.html(video);
            banner.after('<h1 id="name">'+textoName+'</h1>');
            var v = document.getElementsByTagName("video")[0];
            if(v) {
                banner.css('min-height', alto);
                video.css({
                    'width': '100%',
                    'min-height': alto
                });
                video.attr('autoplay', true);
                setInterval(v.play(), 100);
            }
        }
    }
});