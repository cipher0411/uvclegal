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


//Temporal
$('.owl-temporal').owlCarousel({
  center: true,
    items:1,
    loop:true,
    nav: true,
  navText: ['Prev', 'Next'],
    margin:30,
    responsive:{
      992:{
          items:1
      },
  1200:{
    items:1
  }
    }
});


// contact-link
//document.getElementById("emailLink").addEventListener("click", function() {
  //window.location.href = "mailto:uvcteamb2@gmail.com?subject=Enquiry&body=Hello%20UVCLegal%2C%0D%0A%0D%0AI%20would%20like%20to%20enquire%20about...";
//});

//document.getElementById("phoneLink").addEventListener("click", function() {
//  window.location.href = "tel:+441332316601";
//});

//document.getElementById("whatsappLink").addEventListener("click", function() {
 // window.location.href = "tel:+447404700760";
//});

