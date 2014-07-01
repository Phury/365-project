$( document ).ready(function() {
	$('div.gallery img').each(function() {
        var img = $(this);
        img.toggleClass('wow');
        img.toggleClass('fadeInUp');
        img.data('wow-delay', '0.4s');
    });
    new WOW().init();
});