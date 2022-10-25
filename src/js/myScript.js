// Запуск всего блока при полной загрузке стрраницы
$(document).ready(function () {


    //отступ для якорных ссылок

    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(valHref).offset().top - 55 + 'px'
        });
    });


    // анимированное меню навигации 

    //    $(window).scroll(() => {
    //        let scrollDistance = $(window).scrollTop();
    //        $('section.section').each((i, el) => {
    //            if (scrollDistance < $(window).height() - $('nav').outerHeight()) {
    //                $('.menu a').each((i, el) => {
    //                    if ($(el).hasClass('active')) {
    //                        $(el).removeClass('active');
    //                    }
    //                });
    //            }
    //            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
    //                $('.menu a').each((i, el) => {
    //                    if ($(el).hasClass('active')) {
    //                        $(el).removeClass('active');
    //                    }
    //                });
    //                $('.menu li:eq(' + i + ')').find('a').addClass('active');
    //            }
    //        });
    //    });

    const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
            // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
            if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
                // удаляем активный класс у элемента меню
                document.querySelector('.active').classList.remove('active');
                // получаем ID секции, которая текущая
                let id = entry.target.getAttribute('id');
                // обращаемся к ссылке меню, у которой href равен ID секции
                let newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
            }
        });
    }

    // обратите внимание на значение опции threshold
    const options = {
        threshold: 0.55
    }

    const observer = new IntersectionObserver(changeNav, options);

    // передаём все секции в обсервер
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        observer.observe(section);
    });

    // 

    // Анимация при скролле до страницы статистики


    var show = true;
    $(window).on("scroll load resize", function () {

        if (!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $('.stat_item_container').offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $('.stat_item_container').outerHeight();

        if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.spincrement').spincrement({
                thousandSeparator: "",
                duration: 2000
            });

            show = false;
        }
    });

    // Работа с selec'тами
    var selectedItemOne;
    var selectedItemTwo;
    var selectedItemThree;

    var Deadlines;
    var Cost;

    var itemOneDeadlines = 0;
    var itemOneCost = 0;
    var itemTwoDeadlines = 0;
    var itemTwoCost = 0;
    var itemThreeDeadlines = 0;
    var itemThreeCost = 0;

    $("#itemOne").change(function () {
        selectedItemOne = $(this).children("option:selected").val();
        if (selectedItemOne == 'Business') {
            itemOneDeadlines = 5;
            itemOneCost = 250;
        } else if (selectedItemOne == 'Corporate') {
            itemOneDeadlines = 10;
            itemOneCost = 400;
        } else if (selectedItemOne = 'Online') {
            itemOneDeadlines = 15;
            itemOneCost = 600;
        }
    });

    $("#itemTwo").change(function () {
        selectedItemTwo = $(this).children("option:selected").val();
        if (selectedItemTwo == 'Template') {
            itemTwoDeadlines = 1;
            itemTwoCost = 80;
        } else if (selectedItemTwo == 'Unique') {
            itemTwoDeadlines = 2;
            itemTwoCost = 150;
        } else if (selectedItemTwo = 'Transcendent') {
            itemTwoDeadlines = 4;
            itemTwoCost = 250;
        }
    });

    $("#itemThree").change(function () {
        selectedItemThree = $(this).children("option:selected").val();
        if (selectedItemThree == 'PC') {
            itemThreeDeadlines = 1;
            itemThreeCost = 100;
        } else if (selectedItemThree == 'mobile') {
            itemThreeDeadlines = 2;
            itemThreeCost = 100;
        } else if (selectedItemThree = 'all') {
            itemThreeDeadlines = 7;
            itemThreeCost = 250;
        }
    });

    $('.select_item').change(() => {
        Deadlines = itemOneDeadlines + itemTwoDeadlines + itemThreeDeadlines;
        Cost = itemOneCost + itemTwoCost + itemThreeCost;
        $('.score:first').text(Deadlines + ' days');
        $('.score:last').text(Cost + '$');
    });

    // Всплывающее окно

});
