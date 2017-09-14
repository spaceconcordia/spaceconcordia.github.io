$(document).ready(function() {
    if ($('a[href="#followus"]').length === 1) {
        $('a[href="#followus"]').click(function() {
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                
                return false;
            }
        });
    }

    $('footer').find('a[href="#"]').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        
        return false;
    });
});