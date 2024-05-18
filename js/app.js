$(document).ready(function(){
  //hero slider
  $('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    dots: true,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    responsive:{
      0:{
        nav: false,
      },
      600:{
       
      },
      1000:{
        
      }
    }
  })


   //project slider
   $('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: true,
    smartSpeed: 1000,
    navText: ['PREV', 'NEXT'],
    margin: 24,
    responsive:{
      0:{
        items:1,
        center: true,
        nav: false,
      },
      768:{
        items:2,
        center: true,
      },
      1140:{
        items:2,
        center: true,
      }
    }
  })
})