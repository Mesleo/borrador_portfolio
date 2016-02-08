/**
 * Created by anonimo1 on 06/02/2016.
 */
$(function(){
    var a = false;
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
});

var ancla = $(this).attr('href');
var archivo = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
if(archivo == 'works.html'){
    e.preventDefault();
    $('html, body').animate({ scrollTop : $( ancla.length-1 ).offset().top }, 900);
    $('nav').css('transform', 'translateX(-100%)');
}
});



// prueba del menu
e.preventDefault();
var href = $(this).attr('href');
//Devuelve el nombre del fichero
var rutaFichero = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
var ancla = href.split('#');
console.log(rutaFichero);
console.log(ancla[0]);
if(rutaFichero == ancla[0]) {
    $('html, body').animate({ scrollTop : $( ancla.length-1 ).offset().top }, 900);
    $('nav').css('transform', 'translateX(-100%)');
}