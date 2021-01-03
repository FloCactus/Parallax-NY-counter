$(document).ready(function(){
  $(window).scroll(function(event){
    // Переменная получает пиксели бкот прокруч в окне браузера
    let scrollBegins = $(this).scrollTop();

    // Переменная получает ширину окна
    let windowWidth = $(this).outerWidth();

    // Переменная получает высоту контентной части
    let contentHeight = $('.content').outerHeight();

    //Переменная получает высоту верхнего блока
    let upperBlock = $('.parallax').outerHeight();

    // Вычисление прокрутки всей контентной части
    let percent = scrollBegins/contentHeight*100;

    // Поулчаем проценты прокрутки только верхней части
    let percentOfUpperBlockScroll = scrollBegins/upperBlock*100;

    // Переменная для непрозрачности
    let opacity = 1-1/100*percentOfUpperBlockScroll;

    let zoom_1 = 1+ (windowWidth/500*percentOfUpperBlockScroll);
    $('.parallax_snow').css('transform', 'scale('+zoom_1+')');
    $('.parallax_snow').css('opacity', opacity);

    let zoom_2 = 1+(windowWidth/5000000*percent);
    $('.parallax_picture_1').css('transform', 'scale('+zoom_2+')');

    let horizontal = windowWidth/120*percentOfUpperBlockScroll;
    let zoom_3 =1+(windowWidth*0.000005*percentOfUpperBlockScroll);
    $('.parallax_picture_2').css('transform','translate3d('+horizontal+'px, 0, 0)', 'scale('+zoom_3+')');

    let horizontal2 = windowWidth/-170*percentOfUpperBlockScroll;
    let zoom_4 = 1+(windowWidth*0.00001*percentOfUpperBlockScroll);
    $('.parallax_picture_3').css('transform','translate3d('+horizontal2+'px, 0, 0)', 'scale('+zoom_4+')');
  });
});
