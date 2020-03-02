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
// $(".fas").click(function () {
//     $(this).toggleClass("change_icon");
// });
