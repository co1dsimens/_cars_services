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

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").style.position = "fixed";
      document.getElementById("nav").style.backgroundColor = "#fff";
      document.getElementById("nav").style.top = "0px";
      document.getElementById("nav").style.boxShadow = "0 2px 4px 0 #d8d8d8";
      document.getElementById("nav").style.width = "100%";
      document.getElementById("nav").style.zIndex = "9999";
   } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
      document.getElementById("nav").style.top = "0px";
      document.getElementById("nav").style.boxShadow = "none";
   }
}
