$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});
 $('.benefits__number').spincrement({
        thousandSeparator: "",
        duration: 1200
    });
var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });
$(function(){
    setTimeout(function(){ alert('Не уходи!' + '\nСейчас доступна скидка 20%' + '\nПромокод: 666' + '\nУкажи его при заполнении формы'); }, 7000);
});