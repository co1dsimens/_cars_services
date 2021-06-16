Mmenu.configs.classNames.selected = "active";
Mmenu.configs.offCanvas.page.selector = "#my-page";

document.addEventListener(
   "DOMContentLoaded", () => {
      new Mmenu( "#my-menu", {
         slidingSubmenus: false,
         extensions: [
            "fullscreen",
            "theme-dark"
         ],
         navbars: [
            {
               "position": "top",
               "content": [
                  "breadcrumbs",
                  "close"
               ]
            }
         ]
      });
   }
);

$('.owl-carousel').owlCarousel({
   loop:true,
   autoplay:true,
   animateOut:true,
   smartSpeed:650,
   autoplaySpeed:450,
   autoplayTimeout:3000,
   margin:10,
   responsiveClass:true,
   responsive:{
      0:{
         items:2,
         slideBy:2
      },
      600:{
         items:3,
         slideBy:3
      },
      1000:{
         items:5,
         slideBy:5
      }
   }
});

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.position = "fixed";
      document.getElementById("navbar").style.top = "0px";
      document.getElementById("navbar").style.width = "100%";
      document.getElementById("navbar").style.zIndex = "9999";
      document.getElementById("navbar").style.backgroundColor = "#fff";
   } else {
      document.getElementById("navbar").style.position = "relative";
   }
}