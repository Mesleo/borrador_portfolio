/**
 * Created by anonimo1 on 02/02/2016.
 */
$(function(){
    {
        var a = false;
        var b = false;
        var ancho = $(window).width();
        var alto = $(window).height();
        var altoHeader = $('#cabecera').height();
        var etiquetaVideo = $("<video>");
        var content;
        var archivo = location.pathname.substring(location.pathname.lastIndexOf('/')+1);

        if(ancho >= 750){
            console.log(archivo);
            $('#cabecera').css('top', '100%');
            $('.banner').css('background-image', 'none');
            switch (archivo){
                case 'index.html':
                    content = 'media/videos/background_home.mp4';
                    break;
                case 'works.html':
                    content = 'media/videos/background_works.mp4';
                    break;
                case 'about.html':
                    content = 'media/videos/background_about.mp4';
                    break;
                case 'contact.html':
                    content = 'media/videos/background_contact.mp4';
                    break;
            }
            var video = $("<video />",
                {
                    id: "banner", //atributo directo, igual que si fuéramos con attr(“id”)
                    src: content,
                });
            var banner = $('.banner');
            banner.html(video);
            var v = document.getElementsByTagName("video")[0];
            if(v) {
                banner.css('min-height', alto);
                video.css('width', '100%');
                video.css('background-size', '100% 100%');
                video.attr('autoplay', true);
                v.play();
            }
        }
    }
});