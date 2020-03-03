$(document).ready(function(){
    $('.slider-content').slick({
        infinite: true,
        speed: 300,
        autoPlay: true,
        // autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    pauseOnHover: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    pauseOnHover: true,
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(".rows_faq_block").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
});
$(document).ready(function () {
    $(".item_link").click(function () {
        $("#menu_modal").modal('hide');
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});
