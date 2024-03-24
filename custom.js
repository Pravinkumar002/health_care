
$('.hamburg-icon').click(function(){
    $('body').addClass('link-add');
});
$('.close-nav').click(function(){
    $('body').removeClass('link-add');
})
$('.news-slick').slick({
    slidesToShow: 3,
    adaptiveHeight: false,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    respondTo: 'window',
    nextArrow: '<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-long-arrow-left prev" aria-hidden="true"></i>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


/**** testimonial slick */
$('.testimonial-slick').slick({
    slidesToShow: 1,
    adaptiveHeight: false,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    respondTo: 'window',
    nextArrow: '<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-long-arrow-left prev" aria-hidden="true"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


  