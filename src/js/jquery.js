
$(window).scroll(() => {

            let scrollDistance = $(window).scrollTop();

            $(".section").each((i, el) => {

                    if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {

                        $("nav a").each((i, el) => {

                                if ($(el).hasClass("active")) {

                                    $(el).removeClass("active");
                                }
                            }); $('nav li:eq('+ i +')').find('a').addClass('active');
                        }
                    });
            });

$(".em").mask("+7(999) 999-9999");

