
$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
  autoplaySpeed: 1600,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});