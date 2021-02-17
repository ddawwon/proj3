$(function(){

    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      autoplay : true,
      dots: true,
      autoplaySpeed : 1500,
      speed : 1500,
      pauseOnHover : true,
      });


      $(".sec2_imgbox .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : false,
        responsive: [                   
          {  breakpoint: 1180,    
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
                   autoplay : true,
                   autoplaySpeed : 1500,
                   speed : 1500,
                   pauseOnHover : true,
                 }
            }, {  breakpoint: 768,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
            }
    ]  //반응형 포인트 지정
      });

      $("#sec4 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : false,
        responsive: [                   
          {  breakpoint: 1180,    
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
                   autoplay : true,
                   autoplaySpeed : 1500,
                   speed : 1500,
                   pauseOnHover : true,
                 }
            }, {  breakpoint: 1160,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
            }
    ]  //반응형 포인트 지정
      });

      $("#sec6 .regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });

      
})//


