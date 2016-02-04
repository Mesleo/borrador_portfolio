/**
 * Created by anonimo1 on 02/02/2016.
 */
$(document).ready()
{
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
}