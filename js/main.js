$( document ).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    
    margin:10,
    
    nav:true,

    navClass: ['slider__nav--left', 'slider__nav--right'],
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
        	items:4
        }
    }
});
});

var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
    if ($(window).scrollTop() >= 100){
        $btnTop.fadeIn(500);
    }else{
        $btnTop.fadeOut(500);
    }
});

$btnTop.on("click", function(){
    $("html,body").animate({scrollTop:0}, 900);
});