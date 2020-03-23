(function ($) {
    'use strict';

    $(document).on('ready', function () {
        
        
        // ----------------HAMBURGER ANIMATION----------------
        

        // hamburger to X on close
        $("#hamburger-menu").click( function(){
            $(".icon").toggleClass("close");
        })
        
        // ----------------ANIMATE ON SCROLL (AOS)----------------
        AOS.init({
            once: false
        });

        
    });

})(jQuery);
