
$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 55 + 'px'
    });
});

//отступ для якорных ссылок

$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    $('section.section').each((i, el) => {
        if (scrollDistance < $(window).height() - $('nav').outerHeight()) {
            $('.menu a').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });
        }
        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $('.menu a').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });
            $('.menu li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});

// анимированное меню навигации 


//let options = {
//    threshold: [0.8]
//};
//
//let observer = new IntersectionObserver(onEntry, options);
//
//let elements = $('.element-animation');
//
//elements.each((i, el) => {
//    observer.observe(el);
//});
//
//function onEntry(entry) {
//    entry.forEach(change => {
//        if (change.isIntersecting) {
//            change.target.classList.add('show-animation');
//        }
//    });
//}
//
//// скрипт для анимаций
