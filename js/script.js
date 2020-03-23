(function ($) {
    'use strict';

    $(document).on('ready', function () {
        // ----------------TESTIMONIAL SLIDER (OWL)----------------
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
        
        
        // ----------------HAMBURGER ANIMATION----------------
        

        // hamburger to X on close
        $("#hamburger-menu").click( function(){
            $(".icon").toggleClass("close");
        })
        
        // ----------------ANIMATE ON SCROLL (AOS)----------------
        AOS.init({
            once: false
        });

        // ----------------AUTO UPDATE CURRENT YEAR----------------
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
