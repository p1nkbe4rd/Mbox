$(document).ready(function(){
    $('.slider-trending').slick({
        adaptiveHeight: true,
        slidesToShow: 6,
        prevArrow: false,
        responsive:[
            {
                breakpoint: 1600,
                settings:{
                    slidesToShow:5
                }
            },
            {
                breakpoint: 1308,
                settings:{
                    slidesToShow:4
                }
            },
            {
                breakpoint: 1067,
                settings:{
                    slidesToShow:3
                }
            }
        ]
    });
})
$(document).ready(function(){
    $('.slider-channels').slick({
        adaptiveHeight: true,
        slidesToShow: 5,
        prevArrow: false,
        responsive:[
            {
                breakpoint: 1600,
                settings:{
                    slidesToShow:4
                }
            },
            {
                breakpoint: 1308,
                settings:{
                    slidesToShow:3
                }
            },
            {
                breakpoint: 1067,
                settings:{
                    slidesToShow:2
                }
            }
        ]
    });
})
$(document).ready(function(){
    $('.slider-person').slick({
        adaptiveHeight: true,
        slidesToShow: 6,
        prevArrow: false,
        responsive:[
            {
                breakpoint: 1600,
                settings:{
                    slidesToShow:5
                }
            },
            {
                breakpoint: 1308,
                settings:{
                    slidesToShow:4
                }
            },
            {
                breakpoint: 1067,
                settings:{
                    slidesToShow:3
                }
            }
        ]
    });
})