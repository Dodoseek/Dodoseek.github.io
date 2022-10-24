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
                duration: 3000
            });

            show = false;
        }
    });
    
    // Работа с selec'тами
    var selectedItemOne;
    var selectedItemTwo;
    var selectedItemThree;
    
    var Deadlines = 0;
    var Cost = 0;
    
    var itemOneDeadlines;
    var itemOneCost;
    var itemTwoDeadlines;
    var itemTwoCost;
    var itemThreeDeadlines;
    var itemThreeCost;
    
    $("#itemOne").change(function(){
        selectedItemOne = $(this).children("option:selected").val();
        if (selectedItemOne == 'Business'){
            itemOneDeadlines = 5;
            itemOneCost = 250;
        }
        else if(selectedItemOne == 'Corporate'){
            itemOneDeadlines = 10;
            itemOneCost = 400;
        }
        else if(selectedItemOne = 'Online'){
            itemOneDeadlines = 15;
            itemOneCost = 600;
        }
    });
    
    $("#itemTwo").change(function(){
        selectedItemTwo = $(this).children("option:selected").val();
         if (selectedItemTwo == 'Template'){
            itemTwoDeadlines = 1;
            itemTwoCost = 80;
        }
        else if(selectedItemTwo == 'Unique'){
            itemTwoDeadlines = 3;
            itemTwoCost = 150;
        }
        else if(selectedItemTwo = 'Transcendent'){
            itemTwoDeadlines = 5;
            itemTwoCost = 250;
        }
    });
    
    $("#itemThree").change(function(){
        selectedItemThree = $(this).children("option:selected").val();
         if (selectedItemThree == 'PC'){
            itemThreeDeadlines = 1;
            itemThreeCost = 100;
        }
        else if(selectedItemThree == 'mobile'){
            itemThreeDeadlines = 5;
            itemThreeCost = 100;
        }
        else if(selectedItemThree = 'all'){
            itemThreeDeadlines = 7;
            itemThreeCost = 250;
        }
    });
    
    $('.select_item').change(() =>{
        Deadlines = nanEx(itemOneDeadlines) + nanEx(itemTwoDeadlines) + nanEx(itemThreeDeadlines);
        Cost = nanEx(itemOneCost) + nanEx(itemTwoCost) + nanEx(itemThreeCost);
        $('.score:first').text(Deadlines +' days');
        $('.score:last').text(Cost +'$');
    });
    
    function nanEx(meaning){
        if (isNaN(meaning)){
            return 0;
        }
        else{
            return meaning;
        }
    };
});
