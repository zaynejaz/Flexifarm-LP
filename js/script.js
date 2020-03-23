(function ($) {
    'use strict';

    $(document).on('ready', function () {

        // ===================TESTIMONIAL SLIDER (OWL)===================
        $('.testimonial-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
        
        // ===================NAVBAR NAVIGATION SELECTOR + SMOOTH SCROLL + HAMBURGER ANIMATION===================
        
        //cache selectors
        var lastId,
            topMenu = $("#navbarNav"),
            topMenuHeight = topMenu.outerHeight()-1,
            //list items (all)
            menuItems = topMenu.find("a"),
            //corresponding to menu item anchors
            scrollItems = menuItems.map(function(){
              var item = $($(this).attr("href"));
              if (item.length) { return item; }
            });
        // click handler bind to menu items
        //smooth scroll animation
        menuItems.click(function(e){
          var href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
          $('html, body').stop().animate({ 
              scrollTop: offsetTop
          }, 600);
          e.preventDefault();
        });

        //scroll binding
        $(window).scroll(function(){
           //container scroll position
           var fromTop = $(this).scrollTop()+topMenuHeight;
           //remove current scroll item id
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
           //current element id
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";

           if (lastId !== id) {
               lastId = id;
               //set/remove active class
               menuItems
                 .parent().removeClass("active")
                 .end().filter("[href='#"+id+"']").parent().addClass("active");
           }                   
        });

        // hamburger to X on close
        $("#hamburger-menu").click( function(){
            $(".icon").toggleClass("close");
        })
        
        // ===================ANIMATE ON SCROLL (AOS)===================
        AOS.init({
            once: false
        });

        // ===================AUTO UPDATE CURRENT YEAR===================
        window.addEventListener("load", ()=> {
            !function() {
                var e=new Date;
                null!==document.querySelector("#currentYear")&&(document.querySelector("#currentYear").innerText=e.getFullYear())
                }
                ()
            }
        );
        
    });

})(jQuery);
